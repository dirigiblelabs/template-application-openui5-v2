sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"cockpit2/data/dao/ContentDao",
	"cockpit2/utils/ViewUtils"

], function(Controller, ContentDao, ViewUtils) {
	"use strict";

	return Controller.extend("cockpit2.controllers.App", {

		onInit: function() {
			ViewUtils.setMainView(this.getView());

			var sideContent = {
				navigation: [
					{
						title: "Home",
						icon: "sap-icon://home",
						key: "home",
						items: []
					},
					{
						title: "Settings",
						icon: "sap-icon://settings",
						key: "masterSettings",
						items: []
					},
					{
						title: "Statistics",
						icon: "sap-icon://line-chart",
						key: "statistics",
						items: [
							{
								title: "Usage Statistics",
								key: "Usage Statistics was pressed"
							},
							{
								title: "Order Statistics",
								key: "Order Statistics was pressed"
							}
						]
					}
				],
				fixedNavigation: [
					{
						title: "Important Links",
						icon: "sap-icon://chain-link",
						key: "Important Links was pressed"
					},
					{
						title: "Legal",
						icon: "sap-icon://compare",
						key: "Legal was pressed"
					}
				]
			};
			ContentDao.set(sideContent);
		},

		onSideNavButtonPress: function() {
			var oToolPage = this.byId("app");
			// var bSideExpanded = oToolPage.getSideExpanded();
			// this._setToggleButtonTooltip(bSideExpanded);
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},
	});
});