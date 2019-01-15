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
					"title" : "Tiles: a modern UI design pattern for overview & navigation."
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
				},
				{
					"icon" : "sap-icon://travel-expense-report",
					"number" : "281",
					"numberUnit" : "euro",
					"title" : "Travel Reimbursement",
					"info" : "1 day ago"
				},
				{
					"icon" : "sap-icon://loan",
					"number" : "2380",
					"numberUnit" : "euro",
					"title" : "My Salary",
					"info" : "8 days ago"
				},
				{
					"icon" : "sap-icon://lab",
					"number" : "1",
					"numberUnit" : "Invention",
					"title" : "Test Lab Reports",
					"info" : "8 Days Ago"
				},
				{
					"icon" : "sap-icon://inbox",
					"type" : "Monitor",
					"title" : "Leave Request History"
				},
				{
					"type" : "Create",
					"title" : "Create Purchase Order",
					"info" : "890€ Open Budget",
					"infoState" : "Success"
				},
				{
					"icon" : "sap-icon://stethoscope",
					"number" : "3",
					"title" : "Yearly Health Check",
					"info" : "3 year overdue",
					"infoState" : "Error"
				},
				{
					"icon" : "sap-icon://meal",
					"type" : "Monitor",
					"title" : "Meal Schedule"
				},
				{
					"icon" : "sap-icon://cart",
					"number" : "787",
					"numberUnit" : "euro",
					"title" : "My Shopping Carts",
					"info" : "Waiting for Approval",
					"infoState" : "Warning"
				},
				{
					"icon" : "sap-icon://factory",
					"number" : "2",
					"numberUnit" : "Outages",
					"title" : "Factory Power Management",
					"info" : "Production On Hold",
					"infoState" : "Error"
				},
				{
					"icon" : "sap-icon://calendar",
					"title" : "Team Calendar"
				},
				{
					"icon" : "sap-icon://pie-chart",
					"number" : "5",
					"title" : "Financial Reports",
					"info" : "4 day ago",
					"infoState" : "Warning"
				}
			]
		};
	}

	return Controller.extend("cockpit2.controllers.Home", {

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