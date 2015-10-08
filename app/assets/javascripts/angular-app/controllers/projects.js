(function() {
  'use strict';

  angular
    .module('controllers.projects', [])
    .controller('ProjectsCtrl', [
    '$scope', '$state', 'projects', 
    function($scope, $state, projects) {    
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
          $state.go('^', {projects: $scope.projects.splice($scope.projects.indexOf(project), 1)});
          flash('Project deleted successfully!');
        });
      }
    }])
    .controller('EditProjectCtrl', [
    '$scope', '$state', '$stateParams', 'project', 'flash', 'Upload',
    function($scope, $state, $stateParams, project, flash, Upload) {
      $scope.project = project[0];

      $scope.back = function() {
        $state.go('^.show', {id: $stateParams.id})
      }

      $scope.save = function(fd) {
        var file = fd.image
        Upload.upload({
          url: '/api/projects/' + $stateParams.id,
          method: 'PUT',
          data: {
            project: {
              image: file,
              title: (fd.title == null) ? "" : fd.title,
              link: (fd.link == null) ? "" : fd.link,
              description: (fd.description == null) ? "" : fd.description,
              is_primary: fd.is_primary 
            }
          }
        }).success(function (data, status, headers, config) {
          if (data.is_primary == true) {
            for (var i=0; i < $scope.projects.length; i++) {
              $scope.projects[i].is_primary = false;
            }            
          }
          for (var i=0; i < $scope.projects.length; i++) {
            if ($scope.projects[i].id == $stateParams.id) {
              $scope.projects[i] = data;
              break;
            }
          }
          console.log("Successfully updated project!");
          flash("Successfully updated project!");
          $state.go('^.show', {id: $stateParams.id})
        }).error(function (data, status, headers, config) {
          console.log('Error status: ' + status);
          $scope.errors = data;
        });
      }
    }])
    .controller('NewProjectCtrl', [
    '$scope', '$state', 'flash', 'Upload', 
    function($scope, $state, flash, Upload) {
      $scope.back = function() {
        $state.go('^')
      }

      $scope.save = function(fd) {
        var file = fd.image;
        Upload.upload({
          url: '/api/projects',
          method: 'POST',
          data: {
            project: {
              image: file,
              title: (fd.title == null) ? "" : fd.title,
              link: (fd.link == null) ? "" : fd.link,
              description: (fd.description == null) ? "" : fd.description,
              is_primary: fd.is_primary
            }
          }
        }).progress(function (evt) {
          $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          console.log('Progress: ' + $scope.progress + '%');
        }).success(function (data, status, headers, config) {
          if (data.is_primary == true) {
            for (var i=0; i < $scope.projects.length; i++) {
              $scope.projects[i].is_primary = false;
            }            
          }
          console.log('Successfully saved project!');
          flash('Successfully saved project!');
          $scope.projects.push(data);
          $state.go('^');
        }).error(function (data, status, headers, config) {
          console.log('Error status: ' + status);
          $scope.errors = data;
        });
      }
    }]);
})();