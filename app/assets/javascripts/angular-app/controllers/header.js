(function() {
  'use strict';

  angular
    .module('controllers.header', [])
    .controller('HeaderCtrl',[
    '$scope', '$state', '$http', 'jobs', 'projects', 'photos',
    function($scope, $state, $http, jobs, projects, photos) {
      $scope.isActive = function(route) {
        return $state.includes('root.' + route);
      }

      $scope.jobs = jobs;
      $scope.projects = projects;
      $scope.photos = photos;
    }]);
})();