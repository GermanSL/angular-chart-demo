'use strict';

/**
 * @ngdoc function
 * @name angularChartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularChartApp
 */
angular.module('angularChartApp')
  .controller('DetailsCtrl', function ($scope, $routeParams, ChartData) {
   
    $scope.selected_bar_name = ChartData.selected_month;
    
    ChartData.data
       .then(function(res){
          $scope.chart_records = res.data;
          $scope.selected_bar_details = getSelectedBarDetails();
       });
    
    var getSelectedBarDetails = function(){
        var records = [];
        for(var i = 0; i<$scope.chart_records.length; i++){
            if( $scope.chart_records[i].month === ChartData.selected_month ){
                records = $scope.chart_records[i].details;
                break;
            }
        }
        return records;
    };
    
  });
