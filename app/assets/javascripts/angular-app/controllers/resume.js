(function() {
  'use strict';

  angular
    .module('controllers.resume', [])
    .controller('ResumeCtrl', [
    '$scope', '$state', 'jobs', 'resume', '$rootScope', 
    function($scope, $state, jobs, resume, $rootScope) {    
      $scope.jobs = jobs.slice(Math.max(jobs.length - 3, 0));
      
      $scope.resume = resume;
      
      $rootScope.$state = $state;
    }]);
})();