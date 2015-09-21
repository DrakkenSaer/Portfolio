(function() {
  'use strict';

  angular
    .module('controllers.home', [])
    .value('duScrollDuration', 1000)
    .controller('HomeCtrl',['$scope', 'jobs', 'parallaxHelper', function($scope, jobs, parallaxHelper) {
      $scope.jobs = jobs.slice(Math.max(jobs.length - 3, 0));
      $scope.background = parallaxHelper.createAnimator(-0.3, 150, -150);
    }]);
})();