app.controller('HomeCtrl',['$scope', 'jobs', function($scope, jobs) {
  $scope.jobs = jobs.data;
}]);