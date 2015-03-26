'use strict';

/**
 * @ngdoc function
 * @name angularChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularChartApp
 */
angular.module('angularChartApp')
  .controller('MainCtrl', function ($scope, $location) {
  
    $scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.series = ['Month', 'Revenew'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40, 20, 10, 28, 45, 80]
    ];
    
    $scope.onClick = function (points, evt) {
        //console.log(points[0].label);
        //console.log(evt);
        if(points.length > 0)
            $location.path('/bar_details/'+points[0].label);
    };
    
  });
