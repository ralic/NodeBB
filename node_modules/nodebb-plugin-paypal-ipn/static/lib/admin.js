'use strict';
/* globals $, app, socket */

define('admin/plugins/paypal-ipn', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('paypal-ipn', $('.paypal-ipn-settings'));

		$('#save').on('click', function() {
			Settings.save('paypal-ipn', $('.paypal-ipn-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'paypal-ipn-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});