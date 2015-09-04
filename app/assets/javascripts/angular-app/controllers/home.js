(function() {
  'use strict';

  angular
    .module('controllers.home', [])
    .controller('HomeCtrl',['$scope', 'jobs', function($scope, jobs) {
      $scope.jobs = jobs.data;
    }]);
})();