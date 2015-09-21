(function() {
  'use strict';

  angular
    .module('controllers.resume', [])
    .controller('ResumeCtrl', [
    '$scope', '$state', 'jobs', '$rootScope', 
    function($scope, $state, jobs, $rootScope) {    
      $scope.jobs = jobs.slice(Math.max(jobs.length - 3, 0));
      $rootScope.$state = $state;
    }]);
})();