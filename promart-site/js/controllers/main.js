var marketpace = angular.module('marketplace', ['ngRoute']);

marketpace.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'views/marketplace/home.html',
			controller  : 'HomeController'
		});
});