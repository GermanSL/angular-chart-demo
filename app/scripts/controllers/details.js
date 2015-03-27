'use strict';

/**
 * @ngdoc function
 * @name angularChartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularChartApp
 */
angular.module('angularChartApp')
  .controller('DetailsCtrl', function ($scope, ChartData) {
   
    $scope.selected_bar_name = ChartData.selected_bar.month_full_name;
    $scope.revenew = ChartData.selected_bar.revenew;
    $scope.selected_bar_details = ChartData.selected_bar.details;

  });
