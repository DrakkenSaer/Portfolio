app.controller('JobsCtrl',[
  '$scope', '$state', '$resource', 'jobs',
  function($scope, $state, $resource, jobs) {
    $scope.jobs = jobs.data;

    if($scope.jobs == 0 && $scope.user.id == null){
      $state.go('home');
      console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
    };
  }
]);

app.controller('JobCtrl',[
  '$scope', '$resource', '$stateParams', '$state',
  function($scope, $resource, $stateParams, $state) {
    var Job = $resource('/api/jobs/:id', {
      id: "@id",
      format: 'json'
    });

    Job.get({
      id: $stateParams.id
    }, (function(job) {
      $scope.job = job;
    }), (function(httpResponse) {
      $scope.job = null;
    }));

    $scope.back = function(){
      $state.go('jobs');
    };
  }
]);

app.controller('NewJobCtrl',[
  '$scope', '$resource', 'JobFactory',
  function($scope, $resource, JobFactory) {
    var job = new JobFactory();

    $scope.submit = function(data){
      job.$save(data); 
    }
  }
]);


app.controller('EditJobCtrl',[
  '$scope', '$resource', '$stateParams', '$http', '$location',
  function($scope, $resource, $stateParams, $http, $location) {


  }
]);