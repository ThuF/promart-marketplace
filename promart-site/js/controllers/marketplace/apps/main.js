angular.module('marketplace')
.controller('AppController', function ($scope, $http, $routeParams) {

	console.log('Route Params: ' + $routeParams.appId);
});