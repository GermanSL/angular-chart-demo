'use strict';

/**
 * @ngdoc overview
 * @name angularChartApp
 * @description
 * # angularChartApp
 *
 * Main module of the application.
 */
angular
  .module('angularChartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/bar_details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
