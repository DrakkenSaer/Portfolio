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
        fields: {
          'job[title]': job.title,
          'job[company]': job.company,
          'job[description]': job.description,
          'job[years]': job.years,
          'job[manager]': job.manager,
          'job[contact]': job.contact,
          'job[skills]': job.skills,
          'job[address]': job.address,
          'job[references_attributes][0][reference]': job.references[0],
          'job[references_attributes][1][reference]': job.references[1],
          'job[references_attributes][2][reference]': job.references[2],
          'job[references_attributes][3][reference]': job.references[3],
          'job[references_attributes][4][reference]': job.references[4] },
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
        fields: {
          'job[title]': job.title,
          'job[company]': job.company,
          'job[description]': job.description,
          'job[years]': job.years,
          'job[manager]': job.manager,
          'job[contact]': job.contact,
          'job[skills]': job.skills,
          'job[address]': job.address,
          'job[references_attributes][0][reference]': job.references[0],
          'job[references_attributes][1][reference]': job.references[1],
          'job[references_attributes][2][reference]': job.references[2],
          'job[references_attributes][3][reference]': job.references[3],
          'job[references_attributes][4][reference]': job.references[4],
          'job[references_attributes][0][id]': 1,
          'job[references_attributes][1][id]': 2,
          'job[references_attributes][2][id]': 3,
          'job[references_attributes][3][id]': 4,
          'job[references_attributes][4][id]': 5 },
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