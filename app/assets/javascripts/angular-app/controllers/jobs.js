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
          $state.go('^', {jobs: $scope.jobs.splice($scope.jobs.indexOf(job), 1)});
          flash('Message deleted successfully!');
        });
      }
    }
  ])
    .controller('EditJobCtrl',[
    '$scope', '$stateParams', '$state', 'job', 'flash', 'Upload',
    function($scope, $stateParams, $state, job, flash, Upload) {
      $scope.job = job[0];
      
      $scope.back = function() {
        $state.go('^.show', {id: $stateParams.id});
      }
      
      $scope.save = function(fd) {
        var file = fd.image
        Upload.upload({
          url: '/api/jobs/' + $stateParams.id,
          method: 'PUT',
          data: {
            job: {
              image: file,
              title: (fd.title == null) ? "" : fd.title,
              company: (fd.company == null) ? "" : fd.company,
              description: (fd.description == null) ? "" : fd.description,
              years: (fd.years == null) ? "" : fd.years,
              manager: (fd.manager == null) ? "" : fd.manager,
              contact: (fd.contact == null) ? "" : fd.contact,
              skills: (fd.skills == null) ? "" : fd.skills,
              address: (fd.address == null) ? "" : fd.address,
              references_attributes: fd.references
            }
          }
        }).success(function (data, status, headers, config) {
          console.log('Successfully updated work entry!')
          flash('Successfully updated work entry!');
          for (var i=0; i < $scope.jobs.length; i++) {
            if ($scope.jobs[i].id == $stateParams.id) {
              $scope.jobs[i] = data;
              break;
            }
          }
          $state.go('^.show', {id: $stateParams.id});
        }).error(function (data, status, headers, config) {
          console.log('Error status: ' + status);
          $scope.errors = data;
        });
      }
    }
  ])
    .controller('NewJobCtrl',[
    '$scope', '$state', 'flash', 'Upload',
    function($scope, $state, flash, Upload) {
      $scope.back = function() {
        $state.go('^')
      }
      
      $scope.save = function(fd) {
        var file = fd.image;
        Upload.upload({
          url: '/api/jobs',
          method: 'POST',
          data: {
            job: {
              image: file,
              title: (fd.title == null) ? "" : fd.title,
              company: (fd.company == null) ? "" : fd.company,
              description: (fd.description == null) ? "" : fd.description,
              years: (fd.years == null) ? "" : fd.years,
              manager: (fd.manager == null) ? "" : fd.manager,
              contact: (fd.contact == null) ? "" : fd.contact,
              skills: (fd.skills == null) ? "" : fd.skills,
              address: (fd.address == null) ? "" : fd.address,
              references_attributes: fd.references
            }
          }
        }).progress(function (evt) {
          $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          console.log('Progress: ' + $scope.progress + '%');
        }).success(function (data, status, headers, config) {
          console.log('Successfully created work entry!');
          flash('Successfully created work entry!');
          $scope.jobs.push(data);
          $scope.errors = null;
          $state.go('^');
        }).error(function (data, status, headers, config) {
          console.log('Error status: ' + status);
          $scope.errors = data;
        });
      }
    }
  ]);
})();