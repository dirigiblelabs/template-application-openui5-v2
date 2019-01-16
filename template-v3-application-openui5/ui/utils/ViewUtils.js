sap.ui.define([], function() {
	"use strict";

	var MAIN_VIEW;
	var BOOKS_VIEW;

	return {
		getMainView: function() {
			return MAIN_VIEW;
		},
		setMainView: function(view) {
			MAIN_VIEW = view;
		},
		getBooksView: function() {
			return BOOKS_VIEW;
		},
		setBooksView: function(view) {
			BOOKS_VIEW = view;
		}
	};
});