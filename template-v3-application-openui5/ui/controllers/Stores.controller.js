sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	function getData() {
		return {
			"TileCollection" : [
				{
					"icon" : "sap-icon://hint",
					"type" : "Monitor",
					"title" : "Stores"
				},
				{
					"icon" : "sap-icon://inbox",
					"number" : "89",
					"title" : "Approve Leave Requests",
					"info" : "Overdue",
					"infoState" : "Error"
				},
				{
					"type" : "Create",
					"title" : "Create Leave Requests",
					"info" : "28 Days Left",
					"infoState" : "Success"
				}
			]
		};
	}

	return Controller.extend("cockpit2.controllers.Stores", {

		onInit : function (evt) {
			// set mock model
			var oModel = new JSONModel();
			oModel.setData(getData());
			this.getView().setModel(oModel);
		},

		handleEditPress : function (evt) {
			var oTileContainer = this.byId("container");
			var newValue = !oTileContainer.getEditable();
			oTileContainer.setEditable(newValue);
			evt.getSource().setText(newValue ? "Done" : "Edit");
		},

		handleBusyPress : function (evt) {
			var oTileContainer = this.byId("container");
			var newValue = !oTileContainer.getBusy();
			oTileContainer.setBusy(newValue);
			evt.getSource().setText(newValue ? "Done" : "Busy state");
		},

		handleTileDelete : function (evt) {
			var tile = evt.getParameter("tile");
			evt.getSource().removeTile(tile);
		}
	});
});