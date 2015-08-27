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
  '$scope', '$stateParams', '$state', 'JobFactory',
  function($scope, $stateParams, $state, JobFactory) {
    var Job = new JobFactory();

    Job.$get({id: $stateParams.id}, (function(job) {
      $scope.job = job;
    }), (function(httpResponse) {
      $scope.job = null;
    }));
  }
]);

app.controller('NewJobCtrl',[
  '$scope', '$state', 'JobFactory','FileUploader',
  function($scope, $state, JobFactory, FileUploader) {
    $scope.errors = {};
    
    $scope.save = function(data) {
      var job = new JobFactory(data);
      
      job.$save(function() {
        $state.path('/jobs');
      }, function(response) {
        $scope.errors = response.data;
      });
    }
  }
]);


app.controller('EditJobCtrl',[
  '$scope', '$resource', '$stateParams', '$http', '$location',
  function($scope, $resource, $stateParams, $http, $location) {


  }
]);