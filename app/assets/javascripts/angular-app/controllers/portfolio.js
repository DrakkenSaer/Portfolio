(function() {
  'use strict';

  angular
    .module('controllers.portfolio', [])
    .controller('PortfolioCtrl',[
    '$scope', '$state', 'photos', 'projects', 
    function($scope, $state, photos, projects) {    
      $scope.photos = photos;
      $scope.projects = projects;
      
      //implement is_primary = true feature for this later
      $scope.display_photo = photos[photos.length-1];
      $scope.display_project = projects[projects.length-1];
      
      //redirect based on data model and admin user - WIP
      if(photos.length === 0 && projects.length === 0 && $scope.user.id == null){
        //$state.go('home');
        console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
      } else if(photos.length === 0 && projects.length > 0 && $scope.user.id == null) {
        //$state.go('portfolio.projects');
        console.log('Redirected to projects page: Empty data model for photo');        
      } else if(photos.length > 0 && projects.length === 0 && $scope.user.id == null) {
        //$state.go('^.photos');
        console.log('Redirected to photos page: Empty data model for project');
      }
    }]);
})();