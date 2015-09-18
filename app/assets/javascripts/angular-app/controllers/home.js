(function() {
  'use strict';

  angular
    .module('controllers.home', [])
    .value('duScrollDuration', 1000)
    .controller('HomeCtrl',['$scope', 'jobs', 'parallaxHelper', function($scope, jobs, parallaxHelper) {
      $scope.jobs = jobs;
      $scope.background = parallaxHelper.createAnimator(-0.3, 150, -150);
    }]);
})();