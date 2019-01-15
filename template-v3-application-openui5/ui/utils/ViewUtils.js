sap.ui.define([], function() {
	"use strict";

	var MAIN_VIEW;
	var SIDE_VIEW;

	return {
		getMainView: function() {
			return MAIN_VIEW;
		},
		setMainView: function(view) {
			MAIN_VIEW = view;
		},
		getSideView: function() {
			return SIDE_VIEW;
		},
		setSideView: function(view) {
			SIDE_VIEW = view;
		}
	};
});