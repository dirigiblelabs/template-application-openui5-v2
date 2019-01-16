sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"cockpit2/data/dao/BooksDao"

], function(Controller, BooksDao) {
	"use strict";


	return Controller.extend("cockpit2.controllers.Books", {

		onInit: function () {
			var data = [
				{
					icon: "sap-icon://inbox",
					number: "89",
					title: "Books",
					info: "Overdue",
					infoState: "Error"
				}
			];
			BooksDao.getInstance().set(data);
		},

	});
});