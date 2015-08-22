app.controller('HomeCtrl',['$scope', '$location', 'jobs', function($scope, $location, jobs) {
  $scope.isNotActive = function(route) {
    return route != $location.path();
  };

  $scope.jobs = jobs.data;
}]);