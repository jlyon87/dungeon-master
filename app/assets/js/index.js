"use strict";
var app = (function controller(app, $) {

	var init = function() {
		$(document).foundation();
	}();

	app.controller = {};
	return app;
}(app || {}, window.jQuery));
