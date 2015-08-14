app.controller('JobsCtrl',[
  '$scope', '$state', '$resource',
  function($scope, $state, $resource) {
    var Jobs = $resource('/api/jobs/', {
      format: 'json'
    });
    
    Jobs.query(function(jobs) {
      $scope.jobs = jobs;
    }, function(httpResponse) {
      $scope.jobs = null;
    });
    
    console.log($scope.jobs)

    if(0 == 1 && $scope.user.id == null){
      $state.go('home');
      console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
    };
  }
]);

app.controller('JobCtrl',[
  '$scope', '$resource', '$stateParams', '$state',
  function($scope, $resource, $stateParams, $state) {
    var Job = $resource('/api/jobs/:jobId', {
      jobId: "@id",
      format: 'json'
    });

    Job.get({
      jobId: $stateParams.jobId
    }, (function(job) {
      $scope.job = job;
    }), (function(httpResponse) {
      $scope.job = null;
    }));

    $scope.back = function() {
      $state.go('jobs');
    };
  }]);

app.controller('NewJobCtrl',[
  '$scope', '$resource', '$stateParams', '$http', '$location',
  function($scope, $resource, $stateParams, $http, $location) {


  }
]);

app.controller('EditJobCtrl',[
  '$scope', '$resource', '$stateParams', '$http', '$location',
  function($scope, $resource, $stateParams, $http, $location) {


  }
]);