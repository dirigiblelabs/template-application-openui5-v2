sap.ui.define([], function() {
	"use strict";

	return {
		isNull: function(property) {
			return property === undefined || property === null;
		},
		isNotNull: function(property) {
			return !this.isNull(property);
		}
	};
});