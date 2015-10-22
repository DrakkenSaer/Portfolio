(function() {
  'use strict';

  angular
    .module('controllers.resume', [])
    .controller('ResumeCtrl', [
    '$scope', '$state', 'jobs', 'resume', '$rootScope', 'ResumeFactory', 
    function($scope, $state, jobs, resume, $rootScope, ResumeFactory) {
      $scope.jobs = jobs.slice(Math.max(jobs.length - 3, 0));
      resume.id = 1;
      $scope.resume = resume;
      $scope.resume_cancel = angular.copy(resume);
      
      $scope.cancel = function(obj) {
        $scope.resume[obj] = $scope.resume_cancel[obj];
      }
      
      $scope.save = function(resume) {
        var Resume = new ResumeFactory(resume);
        $scope.resume_cancel = angular.copy($scope.resume);
        Resume.$update(function(success) {
          $scope.message = success;
          $scope.errors = null;
          console.log('Resume saved successfully!');
        }, function(error) {
          $scope.errors = error.data;
        });
      }
      
      $rootScope.$state = $state;
    }]);
})();