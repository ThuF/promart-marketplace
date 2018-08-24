angular.module('page', []);
angular.module('page')
.controller('PageController', function ($scope, $http) {

	var api = '/services/v3/js/marketplace/api/apps.js';

	function loadApps() {
		$http.get(api)
		.success(function(data) {
			$scope.applications = data;
		});
	}
	loadApps();

	$scope.openNewDialog = function() {
		$scope.actionType = 'new';
		$scope.entity = {};
		toggleEntityModal();
	};

	$scope.openEditDialog = function(entity) {
		$scope.actionType = 'update';
		$scope.entity = entity;
		toggleEntityModal();
	};

	$scope.openDeleteDialog = function(entity) {
		$scope.actionType = 'delete';
		$scope.entity = entity;
		toggleEntityModal();
	};

	$scope.close = function() {
		toggleEntityModal();
	};

	$scope.create = function() {
		$http.post(api, JSON.stringify($scope.entity))
		.success(function(data) {
			toggleEntityModal();
		}).error(function(data) {
			alert(JSON.stringify(data));
		});
			
	};

	function toggleEntityModal() {
		$('#entityModal').modal('toggle');
	}
});