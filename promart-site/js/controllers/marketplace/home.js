angular.module('marketplace')
.controller('HomeController', function ($scope, $http) {

	$scope.industryTiles = [[{
		'name': 'Building Products',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/1-building-products.jpg'
	}, {
		'name': 'Chemicals',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/2-chemicals-small.jpg'
	}, {
		'name': 'Mill Products',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/3-mill-products-small.jpg'
	}], [{
		'name': 'Mining',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/4-mining-small.jpg'
	}, {
		'name': 'Oil & Gas',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/5%20oil-and-gas.jpg'
	}, {
		'name': 'Utilities',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/6-utilities-small.jpg'
	}], [{
		'name': 'Aerospace & Defense',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/7-aerospace-and-defense.jpg'
	}, {
		'name': 'Automotive',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/8-automotive-small.jpg'
	}, {
		'name': 'High Tech',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/9-high-tech-small.jpg'
	}]];

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