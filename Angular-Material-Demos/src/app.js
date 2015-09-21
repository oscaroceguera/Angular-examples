import angular from 'angular';
import ngMaterial from 'angular-material';

angular.module('app', [ngMaterial])
.controller('MyController', ['$scope','$mdSidenav', function($scope,$mdSidenav){
	$scope.toggleSidenav = function(menuId){
		$mdSidenaV(menuId).toggle();
	}
}])
.config(function($mdThemingProvider){
	let customBlueMap = $mdThemingProvider
	.extendPalette('light-blue', {
		'contrastDefaultColor': 'light',
    	'contrastDarkColors': ['50'],
    	'50': 'ffffff'
  	});

	$mdThemingProvider.definePalette('customBlue', customBlueMap);

  	$mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
    	'default': '500',
    	'hue-1': '50'
    })
    .accentPalette('pink');

	$mdThemingProvider.theme('input', 'default')
	.primaryPalette('grey')
})
