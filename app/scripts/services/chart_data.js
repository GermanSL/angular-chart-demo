
angular.module('angularChartApp')
  .factory('ChartData', function ($http) {
       
    return { selected_month: null, data: $http.get('/chart_data.json') };
    
});