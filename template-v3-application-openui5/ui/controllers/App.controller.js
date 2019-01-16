sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/core/mvc/Controller",
	"cockpit2/data/dao/ContentDao",
	"cockpit2/utils/ViewUtils"

], function(UIComponent, Controller, ContentDao, ViewUtils) {
	"use strict";

	return Controller.extend("cockpit2.controllers.App", {

		onInit: function() {
			ViewUtils.setMainView(this.getView());

			var sideContent = {
				navigation: [
					{
						title: "Home",
						icon: "sap-icon://home",
						key: "home"
					},
					{
						title: "Products",
						icon: "sap-icon://settings",
						items: [{
							title: "Books",
							key: "Books"
						}, {
							title: "Categories",
							key: "Categories"
						}]
					},
					{
						title: "Stores",
						icon: "sap-icon://line-chart",
						key: "Stores"
					},
					{
						title: "Nomenclatures",
						icon: "sap-icon://future",
						items: [{
							title: "Currencies",
							key: "Currencies"
						}]
					},
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

		onItemSelect: function(oEvent) {
			var navItem = oEvent.getParameter("item");
			navItem.getExpanded() ? navItem.collapse(true) : navItem.expand(true);
			
			var navPath = navItem.getKey();
			if (navPath) {
				UIComponent.getRouterFor(this).navTo(navPath);
			}
		},

		onSideNavButtonPress: function() {
			var oToolPage = this.byId("app");
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},
	});
});