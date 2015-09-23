(function() {
  'use strict';

  angular
    .module('controllers.projects', [])
    .controller('ProjectsCtrl', ['$scope', '$state', 'projects', function($scope, $state, projects) {    
      $scope.projects = projects;
      
      //redirect if empty data model & not admin
      if(projects.length === 0 && $scope.user.id == null){
        $state.go('^.home');
        console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
      }
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