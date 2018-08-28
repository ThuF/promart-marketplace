angular.module('marketplace')
.controller('AllAppsController', function ($scope, $http) {

	$scope.activeTab = 'allApps';

	var api = '/services/v3/js/marketplace/api/apps.js';

	function loadApps() {
		$http.get(api)
		.success(function(data) {
			$scope.allApps = data;
		});
	}
	loadApps();

	function loadTopPaidApps() {
		$http.get(api + '/top/paid')
		.success(function(data) {
			$scope.topPaidApps = data;
		});
	}
	loadTopPaidApps();

	function loadTopFreeApps() {
		$http.get(api + '/top/free')
		.success(function(data) {
			$scope.topFreeApps = data;
		});
	}
	loadTopFreeApps();
});