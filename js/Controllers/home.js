define(["angular", "jquery"], function() {
'use strict';

	angular.module('myApp.controllers.home', [])
	  .controller('HomeCtrl', function($scope) {
	 		 $('.main-content').hide();
	  }
	);

});