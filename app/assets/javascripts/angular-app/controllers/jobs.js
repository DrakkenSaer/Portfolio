(function() {
  'use strict';

  angular
    .module('controllers.jobs', [])
    .controller('JobsCtrl', [
    '$scope', '$state', 'jobs', 'flash',
    function($scope, $state, jobs, flash) {
      $scope.jobs = jobs;
      
      //redirect if empty data model & not admin
      if(jobs.length === 0 && $scope.user.id == null){
        $state.go('^.home');
        console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
      }
    }
  ])
    .controller('JobCtrl',[
    '$scope', '$state', 'job', 'JobFactory', 'flash',
    function($scope, $state, job, JobFactory, flash) { 
      $scope.job = job[0];

      $scope.delete = function(job){
        var Job = new JobFactory(job);
        Job.$delete(function(success) {
          $state.go('^', {jobs: $scope.jobs.splice(job, 1)});
          flash('Message deleted successfully!');
        });
      }
    }
  ])
    .controller('EditJobCtrl',[
    '$scope', '$stateParams', '$state', 'job', 'Upload',
    function($scope, $stateParams, $state, job, Upload) {    
      $scope.job = job[0];

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
          console.log('Progress: ' + $scope.progress + '%');
        }).success(function (data, status, headers, config) {
          console.log('File ' + config.file.name + 'uploaded. Response: ' + data);
          $scope.jobs.push(data);
          $state.go('^', {id: $stateParams.id})
        }).error(function (data, status, headers, config) {
          console.log('Error status: ' + status);
          $scope.errors = data;
        });
      }
    }
  ])
    .controller('NewJobCtrl',[
    '$scope', '$state', 'Upload',
    function($scope, $state, Upload) {
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
          console.log('Progress: ' + $scope.progress + '%');
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
})();