(function() {
	"use strict";

	angular
		.module("app", ["ngSanitize", "feature"])
		.controller("Default", Default);

	function Default(productData) {
		var $ctrl = this;
		$ctrl.products = productData.products;


		// $ctrl.htmlSnippet = 
		// 	'Pretty text with some links:\n'+
		// 	'http://angularjs.org/,\n'+
		// 	'mailto:us@somewhere.org,\n'+
		// 	'another@somewhere.org,\n'+
		// 	'and one more: ftp://127.0.0.1/.';
	}

	angular.element(document).ready(() => {
		angular.bootstrap(document, ["app"]);
	});

})();

















