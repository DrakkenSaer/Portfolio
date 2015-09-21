(function() {
  'use strict';

  angular
    .module('controllers.projects', [])
    .controller('ProjectsCtrl', ['$scope', 'projects', function($scope, projects) {    
      $scope.projects = projects;
    }])
    .controller('ProjectCtrl', ['$scope', 'project', function($scope, project) {    
      $scope.project = project[0];
    }])
    .controller('NewProjectCtrl', ['$scope', function($scope) {

    }]);
})();