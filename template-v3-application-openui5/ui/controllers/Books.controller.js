sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"cockpit2/data/dao/BooksDao",
	'sap/ui/model/json/JSONModel'

], function(Controller, BooksDao, JSONModel) {
	"use strict";


	return Controller.extend("cockpit2.controllers.Books", {

		onInit: function () {
			var data = [{
					Title: "Beartown",
					Category: "Action and Adventure",
					ISBN: "978-3-598-21500-1",
					Pages: 432,
					Price: 17,
					Currency: "USD"
				}, {
					Title: "Beartown",
					Category: "Action and Adventure",
					ISBN: "978-3-598-21500-2",
					Pages: 432,
					Price: 17,
					Currency: "USD"
				}];
			BooksDao.getInstance().set(data);
			var oModel = new JSONModel();
			oModel.setData(data[0]);
			this.getView().setModel(oModel, "SelectedBook");

			this.detailsDialog = sap.ui.xmlfragment("cockpit2.views.fragments.Books.DetailsDialog", this);
			this.itemCreateDialog = sap.ui.xmlfragment("cockpit2.views.fragments.Books.CreateDialog", this);

			this.getView().addDependent(this.detailsDialog);
			this.getView().addDependent(this.itemCreateDialog);
		},

		onItemDetailsPressed: function (oEvent) {
			this.detailsDialog.open();
		},

		onItemCreatePressed: function(oEvent) {
			this.itemCreateDialog.open();
		}

	});
});