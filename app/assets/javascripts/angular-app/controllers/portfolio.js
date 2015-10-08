(function() {
  'use strict';

  angular
    .module('controllers.portfolio', [])
    .controller('PortfolioCtrl',[
    '$scope', '$state', 'photos', 'projects', 
    function($scope, $state, photos, projects) {    
      $scope.photos = photos;
      $scope.projects = projects;
      
      //check if primary is set
      for (var i=0; i < $scope.photos.length; i++) {
        if (photos[i].is_primary == true) {
          $scope.display_photo = photos[i]
          break;
        } else {
          $scope.display_photo = photos[photos.length-1];
        }
      }

      for (var i=0; i < $scope.projects.length; i++) {
        if (projects[i].is_primary == true) {
          $scope.display_project = projects[i]
          break;
        } else {
          $scope.display_project = projects[projects.length-1];
        }
      }
      
      //redirect based on data model and admin user
      if(photos.length === 0 && projects.length === 0 && $scope.user.id == null){
        $state.go('^.home');
        console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
      } else if(photos.length === 0 && projects.length > 0 && $scope.user.id == null) {
        $state.go('^.projects');
        console.log('Redirected to projects page: Empty data model for photo');        
      } else if(photos.length > 0 && projects.length === 0 && $scope.user.id == null) {
        $state.go('^.photos');
        console.log('Redirected to photos page: Empty data model for project');
      }
    }]);
})();