sap.ui.define([
	"sap/ui/model/json/JSONModel"

], function(JSONModel) {
	"use strict";

	return {
		getModel: function(view, modelName) {
			return view.getModel(modelName);
		},
		setModel: function(view, model, modelName) {
			view.setModel(model, modelName);
		},
		getData: function(view, modelName) {
			var model = this.getModel(view, modelName);
			return model !== null && model !== undefined ? model.getData() : null;
		},
		setData: function(view, modelName, data) {
			var model = this.getModel(view, modelName);
			if (model === null || model === undefined) {
				model = new JSONModel();
				this.setModel(view, model, modelName);
			}
			model.setData(data);
		},
		updateData: function(view, modelName, newData) {
			var model = view.getModel(modelName);
			if (model === null || model === undefined) {
				model = new JSONModel();
				this.setModel(view, model, modelName);
			}
			var existingData = model.getData();
			for (var i in newData) {
				existingData[i] = newData[i];
			}
			model.setData(existingData);
		}
	};
});