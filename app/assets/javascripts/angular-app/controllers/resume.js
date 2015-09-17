(function() {
  'use strict';

  angular
    .module('controllers.resume', [])
    .controller('ResumeCtrl', ['$scope', 'jobs', function($scope, jobs) {    
      $scope.jobs = jobs;
    }]);
})();