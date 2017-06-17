define(["angular", "ngResource"], function() {
'use strict';

	angular.module('myApp.services', ['ngResource'])
		.config(function($httpProvider){
	  		$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
	  		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		 	})
		.factory('Api', function($resource){
			return {
				//Portfolio: 	$resource('//www.wilyan.com/app/json/portfolio.json', {}, {
				//Portfolio: 	$resource('//wil-ng.herokuapp/wil-ng/app/json/portfolio.json', {}, {
				//Portfolio: 	$resource('//wilweb.github.io/wil-ng/app/json/portfolio.json', {}, {
				//		  			'query':  {method:'GET', isArray:false}
				//}),
				Contact:       $resource('//authdapp.herokuapp.com/wil-ng/js/lib/sendmail/sendmail.wil.php', {}, {
				//Contact: 		$resource('http://p.wilyan.com/js/lib/sendmail/sendmail.wil.php', {}, {
				//Contact: 		$resource('http://ng-wilyan.rhcloud.com/app/js/lib/sendmail/sendmail.wil.php', {}, {
				//Contact: 		$resource('http://wyan.htpwebdesign.ca/wil-ng/app/js/lib/sendmail/sendmail.wil.php', {}, {
						  			'sendmail':  {method:'POST', isArray:false}
				})

			};			
		}
	);
});
