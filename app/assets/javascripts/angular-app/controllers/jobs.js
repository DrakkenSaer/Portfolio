app.controller('JobsCtrl',[
  '$scope', '$state', 'jobs',
  function($scope, $state, jobs) {
    $scope.jobs = jobs.data;

    if($scope.jobs == 0 && $scope.user.id == null){
      $state.go('home');
      console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
    };
  }
]);

app.controller('JobCtrl',[
  '$scope', '$stateParams', 'JobFactory',
  function($scope, $stateParams, JobFactory) {
    var Job = new JobFactory();

    Job.$get({id: $stateParams.id}, (function(job) {
      $scope.job = job;
    }), (function(httpResponse) {
      $scope.job = null;
    }));
  }
]);

app.controller('NewJobCtrl',[
  '$scope', '$state', 'Upload',
  function($scope, $state, Upload) {
    $scope.back = function(){
      $state.go('jobs')
    }
    
    $scope.save = function(job) {
      var file = job.image;
      Upload.upload({
        url: '/api/jobs',
        method: 'POST',
        data: job,
        file: file,
        fileFormDataName: 'job[image]'
      }).progress(function (evt) {
        $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        console.log('Progress: ' + $scope.progress + '% ' + evt.config.file.name);
      }).success(function (data, status, headers, config) {
        console.log('File ' + config.file.name + 'uploaded. Response: ' + data);
        $scope.jobs.push(data);
        $state.go('jobs');
      }).error(function (data, status, headers, config) {
        console.log('Error status: ' + status);
        $scope.errors = data;
      });
    }
  }
]);

app.controller('EditJobCtrl',[
  '$scope', '$stateParams', '$state', 'JobFactory', 'Upload',
  function($scope, $stateParams, $state, JobFactory, Upload) {    
    var Job = new JobFactory();
    
    Job.$get({id: $stateParams.id}, (function(job) {
      job.image = null;
      $scope.job = job;
    }), (function(httpResponse) {
      $scope.job = null;
    }));

    $scope.back = function(){
      $state.go('jobs.show', {id: $stateParams.id})
    }

    $scope.save = function(job) {
      var file = job.image;
      Upload.upload({
        url: '/api/jobs/' + job.id,
        method: 'PUT',
        data: job,
        file: file,
        fileFormDataName: 'job[image]'
      }).progress(function (evt) {
        $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        console.log('Progress: ' + $scope.progress + '% ' + evt.config.file.name);
      }).success(function (data, status, headers, config) {
        console.log('File ' + config.file.name + 'uploaded. Response: ' + data);
        $scope.jobs.push(data);
        $state.go('jobs.show', {id: $stateParams.id})
      }).error(function (data, status, headers, config) {
        console.log('Error status: ' + status);
        $scope.errors = data;
      });
    }
  }
]);