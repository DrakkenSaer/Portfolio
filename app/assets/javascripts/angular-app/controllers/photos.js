(function() {
  'use strict';

  angular
    .module('controllers.photos', [])
    .controller('PhotosCtrl', ['$scope', 'photos', function($scope, photos) {    
      $scope.photos = photos;
    }])
    .controller('EditPhotoCtrl', ['$scope', 'photo', function($scope, photo) {
      $scope.photo = photo[0];

      // add upload behaviour when Jobs#Create works better (using same logic)
    }])
    .controller('NewPhotoCtrl', ['$scope', function($scope) {
      // add upload behaviour when Jobs#Create works better (using same logic)
    }]);
})();