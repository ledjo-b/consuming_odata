sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.consume_odata.controller.App", {

		formatter: formatter,

		onInit: function () {

		}
	});
});