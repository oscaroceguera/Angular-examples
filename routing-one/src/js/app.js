import angular from 'angular';
import ngRoute from 'angular-route'
import {} from './controllers/acerca';
import {} from './controllers/contacto';
import {} from './controllers/home';

angular.module('angularRoutingApp', [ngRoute,'acerca.controller', 'home.Controller','contacto.controller'])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/acerca', {
            templateUrl : 'pages/acerca.html',
            controller  : 'aboutController'
        })
        .when('/contacto', {
            templateUrl : 'pages/contacto.html',
            controller  : 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
})
