(function() {
  'use strict';

  angular
    .module('controllers.projects', [])
    .controller('ProjectsCtrl', ['$scope', 'projects', function($scope, projects) {    
      $scope.projects = projects;
    }])
    .controller('ProjectCtrl', [
    '$scope', '$state', 'flash', 'project', 'ProjectFactory', 
    function($scope, $state, flash, project, ProjectFactory) {    
      $scope.project = project[0];
      
      $scope.delete = function(project){
        var Project = new ProjectFactory(project);
        Project.$delete(function(success) {
          $state.go('^', {projects: $scope.projects.splice(project, 1)});
          flash('Project deleted successfully!');
        });
      }
    }])
    .controller('EditProjectCtrl', ['$scope', 'project', function($scope, project) {
      $scope.project = project[0];

      // add upload behaviour when Jobs#Create works better (using same logic)
    }])
    .controller('NewProjectCtrl', ['$scope', function($scope) {
      // add upload behaviour when Jobs#Create works better (using same logic)
    }]);
})();