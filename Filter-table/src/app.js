import angular from 'angular';

angular.module('sortApp', [])
.controller('mainController',['$scope', function($scope){
	$scope.sortType    = 'name';
	$scope.sortReverse = false;
	$scope.searchFish  = '';

	$scope.sushi = [
		{ name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
	    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
	    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
	    { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
	]
}]);
