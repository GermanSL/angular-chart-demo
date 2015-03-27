
angular.module('angularChartApp')
  .factory('ChartData', function ($http) {
       
    return { selected_bar: null, data: $http.get('/chart_data.json') };
    
});