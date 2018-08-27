var marketpace = angular.module('marketplace', ['ngRoute']);

marketpace.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'views/marketplace/home.html',
			controller  : 'HomeController'
		})
		.when('/apps/featured/', {
			templateUrl : 'views/marketplace/apps.html',
			controller  : 'FeaturedAppsController'
		})
		.when('/apps/recent/', {
			templateUrl : 'views/marketplace/apps.html',
			controller  : 'RecentAppsController'
		})
		.when('/apps/:appId', {
			templateUrl : 'views/marketplace/app.html',
			controller  : 'AppController'
		})
		.when('/industries/:industryId', {
			templateUrl : 'views/marketplace/industry.html',
			controller  : 'IndustryController'
		})
		.otherwise({
			redirectTo: '/'
		});
});