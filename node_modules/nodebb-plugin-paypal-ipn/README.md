# nodebb-plugin-paypal-ipn

An instant paypal notification handler for NodeBB.

### Usage

This plugin is setup to accept ipn's to the /ipn route of your forums. Be sure to have paypal send the notifications to that url (http://my.cool.forum/ipn).

This plugin assumes the ipn route is reachable on port 80. If that isn't the case, the plugin will not work because the notification requires port 80. 

The plugin's ACP page has two settings on it. One to set the receiver email (the paypal email address people use to send money) and one for the paypal url which is used to verify ipn's. The paypal url should point to http://www.paypal.com/cgi-bin/webscr in all cases except for testing. If making use of paypal's IPN Simulator, be sure to point this to [http://www.sandbox.paypal.com/cgi-bin/webscr](http://www.sandbox.paypal.com/cgi-bin/webscr).

Right now, the plugin doesn't act on the notifications, it only verifies them. Making use of the notification is up to the user. The area of interest is found in the /lib/controllers.js. Scroll down till you find the nodebb.winston.info('yey! i can do stuff nows'); line. That is where the notification can be handled.

### TODO
- Add a plugin framework for carrying out various actions on the notifications.