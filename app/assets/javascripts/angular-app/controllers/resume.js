(function() {
  'use strict';

  angular
    .module('controllers.resume', [])
    .controller('ResumeCtrl', [
    '$scope', '$state', 'jobs', 'resume', '$rootScope', 'ResumeFactory', 'flash',
    function($scope, $state, jobs, resume, $rootScope, ResumeFactory, flash) {
      $scope.jobs = jobs.slice(Math.max(jobs.length - 3, 0));
      $scope.resume = resume;

      //for add_school form control
      $scope.number = 0;
      $scope.getNumber = function(num) {
        return new Array(num);   
      }

      //for ui-router header/footer exclusion
      $rootScope.$state = $state;

      //cancel function for resume editing
      $scope.resume_original = angular.copy(resume);
      $scope.cancel = function(obj) {
        $scope.resume[obj] = angular.copy($scope.resume_original[obj]);
      }

      $scope.remove = function(obj) {
        var Obj = new ResumeFactory(obj);
        Obj.$delete(function(success) {
          $scope.resume_original = angular.copy(success);
          $scope.resume = success;
          flash('School deleted successfully!');
        });
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

        if (resume.id) {
          Resume.$update(function(success) {
            $scope.resume_original = angular.copy(success);
            $scope.resume = success;
            $scope.errors = null;
            console.log('Resume saved successfully!');
          }, function(error) {
            $scope.errors = error.data;
          });
        } else {
          Resume.$save(function(success) {
            $scope.resume_original = angular.copy(success);
            $scope.resume = success;
            $scope.errors = null;
            console.log('Resume saved successfully!');
          }, function(error) {
            $scope.errors = error.data;
          });
        }
      }

      //redirect if empty data model & not admin
      if(resume.id == null && $scope.user.id == null){
        $state.go('root.home');
        console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
      }
    }]);
})();