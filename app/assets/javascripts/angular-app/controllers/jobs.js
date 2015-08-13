app.controller('JobsCtrl',[
  '$scope', '$stateParams', '$http', '$state',
  function($scope, $stateParams, $http, $state) {
    $scope.jobs = []
    $http.get('/api/jobs').
    success(function(data) {
      $scope.jobs = data
    });


    if($scope.jobs.length == 0 && $scope.user.id == null){
      $state.go('home');
      return console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
    };
  }
]);

app.controller('JobCtrl',[
  '$scope', '$resource', '$stateParams', '$state',
  function($scope, $resource, $stateParams, $state) {
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