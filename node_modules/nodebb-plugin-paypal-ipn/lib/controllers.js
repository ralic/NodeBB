'use strict';
var nodebb = require('./nodebb'),
	querystring = require('querystring'),
	pjson = require('../package.json'),
	request = require('request'),
	
	Controllers = {};

Controllers.renderAdminPage = function (req, res, next) {
	res.render('admin/plugins/paypal-ipn', {});
};

Controllers.ipn = function(req, res, next) {
	// return empty http 200 response required by IPN auth protocol
	res.statusCode = 200;
	res.end();
	
	// get settings then authenticate
	nodebb.Meta.settings.get('paypal-ipn', function(err, settings) {
		if (err) {
			nodebb.winston.error(err);
			return;
		}
		
		auth(req, settings);
	});
};

var auth = function(req, settings) {
	// authenticate IPN via specification:
	// https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNImplementation/
	
	req.txnId = req.body.txn_id + ':' + req.body.payment_status;
	req.rawBody = querystring.stringify(req.body);
	
	nodebb.winston.info('[' + pjson.name + 
		'] Verifying IPN(' + req.txnId + ')...');
	
	// post body back to PayPal
	var options = {
		url: (settings.paypalUrl || 'http://www.paypal.com/cgi-bin/webscr'),
		method: 'POST',
		headers: {
			'Connection': 'close'
		},
		body: 'cmd=_notify-validate&' + req.rawBody,
		strictSSL: true,
		rejectUnauthorized: false,
		requestCert: true,
		agent: false
	};
	request(options, authResponse(req, settings));
};

var authResponse = function (req, settings) {
	var txnKey = 'paypal-ipn:txnIds';
	var logIPNError = function(msg) {
		nodebb.winston.warn('[' + pjson.name + '] IPN(' + 
			req.txnId + ') failed check. ' + msg + '\n' + req.rawBody);
	};

	return function callback(error, response, body) {
		if (!error && response.statusCode === 200) {
			if (body === 'VERIFIED') {
				// check receiver_email equals paypal email
				if (req.body.receiver_email !== (settings.receiverEmail || '')) {
					logIPNError('Wrong receiver_email.');
					return;
				}
				
				// check transaction (to avoid handling a transaction twice) 
				nodebb.db.isSetMember(txnKey, req.txnId, 
					function(err, isMember) {
						if (err) {
							logIPNError('DB check error.\n' + err);
							return;
						}
						if (isMember) {
							logIPNError('Already handled.');
							return;
						}
						
						nodebb.db.setAdd(txnKey, req.txnId, function(err) {
							if (err) {
								logIPNError('DB save error.\n' + err);
								return;
							}
							
							nodebb.winston.info('[' + pjson.name + '] IPN(' + 
							req.txnId + ') verified!');
						
							// verification complete: do stuff
							nodebb.winston.info('yey! i can do stuff nows');
						});
					}
				);
				return;
			}
			
			if (body === 'INVALID') {
				logIPNError('Not sent by paypal.');
				return;
			}
			
			// should never happen
			logIPNError('Paypal body corrupt? ('+ body +')');
		}
	};
};

module.exports = Controllers;