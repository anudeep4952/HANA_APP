/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo_ui5/demo_ui5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});