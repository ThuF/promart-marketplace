angular.module('marketplace')
.controller('HomeController', function ($scope, $http) {

	$scope.industryTiles = [[{
		'id': 'building-products',
		'name': 'Building Products',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/1-building-products.jpg'
	}, {
		'id': 'chemicals',
		'name': 'Chemicals',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/2-chemicals-small.jpg'
	}, {
		'id': 'mill-products',
		'name': 'Mill Products',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/3-mill-products-small.jpg'
	}], [{
		'id': 'mining',
		'name': 'Mining',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/4-mining-small.jpg'
	}, {
		'id': 'oil-and-gas',
		'name': 'Oil & Gas',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/5%20oil-and-gas.jpg'
	}, {
		'id': 'utilities',
		'name': 'Utilities',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/6-utilities-small.jpg'
	}], [{
		'id': 'aerospace-and-defence',
		'name': 'Aerospace & Defense',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/7-aerospace-and-defense.jpg'
	}, {
		'id': 'automotive',
		'name': 'Automotive',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/8-automotive-small.jpg'
	}, {
		'id': 'high-tech',
		'name': 'High Tech',
		'info': 'Industry Solutions',
		'image': 'http://www.promart.io/img/industries/400x400/9-high-tech-small.jpg'
	}]];

	var api = '/services/v3/js/marketplace/api/apps.js';

	function loadFeaturedApps() {
		$http.get(api + '/featured')
		.success(function(data) {
			$scope.featuredApps = data;
		});
	}
	loadFeaturedApps();

	function loadRecentApps() {
		$http.get(api + '/recent')
		.success(function(data) {
			$scope.recentApps = data;
		});
	}
	loadRecentApps();
});