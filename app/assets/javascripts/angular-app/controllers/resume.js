(function() {
  'use strict';

  angular
    .module('controllers.resume', [])
    .controller('ResumeCtrl', [
    '$scope', '$state', 'jobs', 'resume', '$rootScope', 'ResumeFactory', 
    function($scope, $state, jobs, resume, $rootScope, ResumeFactory) {
      $scope.jobs = jobs.slice(Math.max(jobs.length - 3, 0));
      $scope.resume = resume;
      $scope.resume_original = angular.copy(resume);
      $scope.number = 0;
      $scope.getNumber = function(num) {
        return new Array(num);   
      }
      $rootScope.$state = $state;

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
      } else if($state.is('root.resume') && resume.id == null && $scope.user.id != null) {
        $state.go('.new');
        console.log('Redirected to new resume page: Empty model data');
      }
    }])
    .controller('NewResumeCtrl', [
    '$scope', '$rootScope', '$state', 'ResumeFactory', 'flash',
    function($scope, $rootScope, $state, ResumeFactory, flash) {
      $scope.number = 0;
      $scope.getNumber = function(num) {
        return new Array(num);   
      }
      $rootScope.$state = $state;

      if($scope.resume.id != null){
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
          flash('Successfully created resume!');
          console.log('Successfully created resume!');
          $scope.errors = null;
          $state.go('^', {resume: success});
        }, function(error) {
          $scope.errors = error.data;
        });
      }
    }]);
})();