'use strict';

/**
 * @ngdoc function
 * @name angularChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularChartApp
 */
angular.module('angularChartApp')
  .controller('MainCtrl', function ($scope, $location, ChartData) {
    
    ChartData.data
       .then(function(res){
          $scope.chart_records = res.data;
          $scope.labels = getArrayOfValuesByKey('month');
          $scope.data = [getArrayOfValuesByKey('revenew')];
        });
    
    
    $scope.onClick = function (points, evt) {
        if(points.length > 0){
            ChartData.selected_bar = getSelectedBar( points[0].label );
            $location.path('/bar_details/');
        }
    };
    
    var getArrayOfValuesByKey = function(key){
        var arr = [];
        var list = $scope.chart_records;
        for(var i=0; i < list.length; i++){
            arr.push(list[i][key]);
        }
        return arr;
    };
    
    var getSelectedBar = function(key){
        var selected_bar = null;
        for(var i = 0; i<$scope.chart_records.length; i++){
            if( $scope.chart_records[i].month === key ){
                selected_bar = $scope.chart_records[i];
                break;
            }
        }
        return selected_bar;
    };
    
  });
