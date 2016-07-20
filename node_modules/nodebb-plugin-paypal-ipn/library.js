"use strict";

var controllers = require('./lib/controllers'),

	plugin = {};

plugin.load = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware;
		
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.
	router.get('/admin/plugins/paypal-ipn', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/paypal-ipn', controllers.renderAdminPage);
	
	// route instant paypal notifications will come in at
	router.post('/ipn', controllers.ipn);
	
	callback();
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/paypal-ipn',
		icon: 'fa-tint',
		name: 'Paypal IPN'
	});

	callback(null, header);
};

module.exports = plugin;