(function() {
  'use strict';

  angular
    .module('controllers.resume', [])
    .controller('ShowResumeCtrl', [
    '$scope', '$state', 'jobs', 'resume', '$rootScope', 'ResumeFactory', 
    function($scope, $state, jobs, resume, $rootScope, ResumeFactory) {
      $scope.jobs = jobs.slice(Math.max(jobs.length - 3, 0));
      $scope.resume = resume;
      $scope.resume_original = angular.copy(resume);

      $scope.cancel = function(obj) {
        var resume_canceled = angular.copy($scope.resume_original);
        $scope.resume[obj] = resume_canceled[obj];
      }

      $scope.save = function(resume) {
        //Rails-friendly data compilation for nested attributes
        var data = {
          resume: {
            header: resume.header,
            link: resume.link,
            address: resume.address,
            phone: resume.phone,
            email: resume.email,
            position: resume.position,
            qualifications: resume.qualifications,
            skills: resume.skills,
            schools_attributes: resume.schools 
          },
          id: resume.id
        }
        var Resume = new ResumeFactory(data);
        Resume.$update(function(success) {
          $scope.resume_original = angular.copy(resume);
          $scope.errors = null;
          console.log('Resume saved successfully!');
        }, function(error) {
          $scope.errors = error.data;
        });
      }


      //redirect if empty data model & not admin
      if(resume.id == null && $scope.user.id == null){
        $state.go('root.home');
        console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
      } else if(resume.id == null && $scope.user.id != null) {
        $state.go('^.new');
        console.log('Redirected to new resume page: Empty model data');
      }
    }])
    .controller('NewResumeCtrl', [
    '$scope', '$state', 'ResumeFactory', 'resume', 'flash',
    function($scope, $state, ResumeFactory, resume, flash) {
      $scope.resume = resume;
      if(resume.id != null){
        flash('info', 'A resume already exists! View it to update it.');
      } 
      $scope.save = function(resume) {
        //Rails-friendly data compilation for nested attributes
        var data = {
          resume: {
            header: resume.header,
            link: resume.link,
            address: resume.address,
            phone: resume.phone,
            email: resume.email,
            position: resume.position,
            qualifications: resume.qualifications,
            skills: resume.skills,
            schools_attributes: resume.schools 
          }
        }
        var Resume = new ResumeFactory(data);
        Resume.$save(function(success) {
          $scope.resume = success;
          $scope.errors = null;
          $state.go('^.show');
          console.log('Resume saved successfully!');
        }, function(error) {
          $scope.errors = error.data;
        });
      }
    }]);
})();