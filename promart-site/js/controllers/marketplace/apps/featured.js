angular.module('marketplace')
.controller('FeaturedAppsController', function ($scope, $http) {

	var api = '/services/v3/js/marketplace/api/apps.js';

	function loadApps() {
		$http.get(api)
		.success(function(data) {
			$scope.applications = data;
		});
	}
	loadApps();
});