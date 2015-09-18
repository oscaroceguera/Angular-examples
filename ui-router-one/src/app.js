import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {} from './controller.js';

angular.module('routerApp', [uiRouter,'myController'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url : '/home',
		templateUrl : 'partial-home.html'
	})
	.state('home.list', {
		url : '/list',
		templateUrl : 'partial-home-list.html',
		controller : function($scope) {
			$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
		}
	})
	.state('home.paragraph', {
		url : '/paragraph',
		template : 'I could sure use a drink rigth now'
	})
	.state('about', {
     	url : '/about',
		views : {
			 // the main template will be placed here (relatively named)
			'' : { templateUrl : 'partial-about.html' },

			// the child views will be defined here (absolutely named)
			'columnOne@about' : { template : 'look I am a column!' },

			// for column two, we'll define a separate controller
			'columnTwo@about' : {
				templateUrl : 'table-data.html',
				controller : 'scotchController'
			}

		}
    });
})
