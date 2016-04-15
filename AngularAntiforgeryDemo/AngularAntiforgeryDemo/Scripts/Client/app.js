
'use strict';

var demoApp = angular.module('demoApp', ['ngRoute', 'ngCookies']);

demoApp.config(function($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })
        .when('/test', {
            templateUrl: 'views/test.html',
            controller: 'testController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });

    $httpProvider.interceptors.push('antiForgeryInterceptor');
})
.constant('apiUrl', 'http://localhost:11899/api/v1/');