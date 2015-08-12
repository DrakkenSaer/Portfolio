app.controller('JobsCtrl',[
  '$scope', '$stateParams', '$http', '$location',
  function($scope, $stateParams, $http, $location) {
    $scope.jobs = []
    $http.get('/api/jobs').
    success(function(data) {
      $scope.jobs = data
    });
  }]);

app.controller('JobCtrl',[
  '$scope', '$resource', '$stateParams', '$http', '$location',
  function($scope, $resource, $stateParams, $http, $location) {
    var Job;

    Job = $resource('/api/jobs/:jobId', {
      jobId: "@id",
      format: 'json'
    });

    Job.get({
      jobId: $stateParams.jobId
    }, (function(job) {
      return $scope.job = job;
    }), (function(httpResponse) {
      return $scope.job = null;
    }));

    $scope.back = function() {
      return $location.path("/jobs");
    };
  }]);

app.controller('NewJobCtrl',[
  '$scope', '$resource', '$routeParams', '$http', '$location',
  function($scope, $resource, $routeParams, $http, $location) {


  }]);

app.controller('EditJobCtrl',[
  '$scope', '$resource', '$routeParams', '$http', '$location',
  function($scope, $resource, $routeParams, $http, $location) {


  }]);