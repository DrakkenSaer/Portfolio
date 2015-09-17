(function() {
  'use strict';

  angular
    .module('controllers.resume', [])
    .controller('ResumeCtrl', ['$scope', '$state', 'jobs', '$rootScope', function($scope, $state, jobs, $rootScope) {    
      $scope.jobs = jobs;
      $rootScope.$state = $state;
    }]);
})();