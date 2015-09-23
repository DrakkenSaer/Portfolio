(function() {
  'use strict';

  angular
    .module('controllers.photos', [])
    .controller('PhotosCtrl', ['$scope', '$state', 'photos', function($scope, $state, photos) {    
      $scope.photos = photos;
      
      //redirect if empty data model & not admin
      if(photos.length === 0 && $scope.user.id == null){
        $state.go('^.home');
        console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
      }
    }])
    .controller('EditPhotoCtrl', ['$scope', 'photo', function($scope, photo) {
      $scope.photo = photo[0];

      // add upload behaviour when Jobs#Create works better (using same logic)
    }])
    .controller('NewPhotoCtrl', ['$scope', function($scope) {
      // add upload behaviour when Jobs#Create works better (using same logic)
    }]);
})();