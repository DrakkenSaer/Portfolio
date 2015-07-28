app.controller('JobsCtrl',[
  '$scope', '$resource', '$routeParams', '$http', 
  function($scope, $resource, $routeParams, $http) {
    $scope.jobs = []
    $http.get('/api/jobs').
    success(function(data) {
      $scope.jobs = data
    });
  }]);