var marketpace = angular.module('marketplace', ['ngRoute']);

marketpace.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'views/marketplace/home.html',
			controller  : 'HomeController'
		})
		.when('/apps/', {
			templateUrl : 'views/marketplace/apps.html',
			controller  : 'AllAppsController'
		})
		.when('/apps/featured/', {
			templateUrl : 'views/marketplace/apps.html',
			controller  : 'FeaturedAppsController'
		})
		.when('/apps/recent/', {
			templateUrl : 'views/marketplace/apps.html',
			controller  : 'RecentAppsController'
		})
		.when('/industries/:industryId', {
			templateUrl : 'views/marketplace/industry.html',
			controller  : 'IndustryController'
		})
		.otherwise({
			redirectTo: '/'
		});
});