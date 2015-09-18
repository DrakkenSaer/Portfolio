(function() {
  'use strict';

  angular
    .module('controllers.header', [])
    .controller('HeaderCtrl',[
    '$scope', '$state', '$http', 
    function($scope, $state, $http) {
      $scope.isActive = function(route) {
        return route === $state.current.name;
      }

      $scope.jobs = []
      $http.get('/api/jobs').
      success(function(data) {
        $scope.jobs = data
      });

      $scope.projects = []
      $http.get('/api/projects').
      success(function(data) {
        $scope.projects = data
      });

      $scope.photos = []
      $http.get('/api/photos').
      success(function(data) {
        $scope.photos = data
      });
    }]);
})();