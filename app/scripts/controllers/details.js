'use strict';

/**
 * @ngdoc function
 * @name angularChartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularChartApp
 */
angular.module('angularChartApp')
  .controller('DetailsCtrl', function ($scope, $routeParams) {
    $scope.selected_bar_name = $routeParams.id;
    
  });
