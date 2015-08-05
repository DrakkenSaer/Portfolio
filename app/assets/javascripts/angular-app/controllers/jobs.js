app.controller('JobsCtrl',[
  '$scope', '$routeParams', '$http', '$location', 
  function($scope, $routeParams, $http, $location) {
    $scope.jobs = []
    $http.get('/api/jobs').
    success(function(data) {
      $scope.jobs = data
    });

    $scope.view = function(jobId) {
      return $location.path("/jobs/" + jobId);
    };
  }]);

app.controller('JobCtrl',[
  '$scope', '$resource', '$routeParams', '$http', '$location',
  function($scope, $resource, $routeParams, $http, $location) {
    var Job;

    Job = $resource('/api/jobs/:jobId', {
      jobId: "@id",
      format: 'json'
    });

    Job.get({
      jobId: $routeParams.jobId
    }, (function(job) {
      return $scope.job = job;
    }), (function(httpResponse) {
      return $scope.job = null;
    }));

    $scope.back = function() {
      return $location.path("/jobs");
    };
  }]);