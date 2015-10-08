(function() {
  'use strict';

  angular
    .module('controllers.photos', [])
    .controller('PhotosCtrl', [
    '$scope', '$state', 'photos', 'flash', 'PhotoFactory', 
    function($scope, $state, photos, flash, PhotoFactory) {
      $scope.photos = photos;

      // for fancybox, otherwise angular redirects to root due to html5 mode
      $scope.$on('$locationChangeStart', function (event, next, current) {
        if (next.indexOf('/images/') > 0) {
          event.preventDefault();
        }
      });

      $scope.delete = function(photo){
        var Photo = new PhotoFactory(photo);
        Photo.$delete(function(success) {
          $scope.photos.splice($scope.photos.indexOf(photo), 1);
          flash('Photo deleted successfully!');
        });
      }

      //redirect if empty data model & not admin
      if(photos.length === 0 && $scope.user.id == null){
        $state.go('^.home');
        console.log('Redirected to home page: Un-authenticated users cannot view empty model data');
      }
    }])
    .controller('EditPhotoCtrl', [
    '$scope', '$state', '$stateParams', 'photo', 'flash', 'Upload', 
    function($scope, $state, $stateParams, photo, flash, Upload) {
      $scope.photo = photo[0];

      $scope.save = function(fd) {
        var file = fd.image
        Upload.upload({
          url: '/api/photos/' + $stateParams.id,
          method: 'PUT',
          data: {
            photo: {
              image: file,
              title: (fd.title == null) ? "" : fd.title,
              photographer: (fd.photographer == null) ? "" : fd.photographer,
              is_primary: fd.is_primary 
            }
          }
        }).success(function (data, status, headers, config) {
          if (data.is_primary == true) {
            for (var i=0; i < $scope.photos.length; i++) {
              $scope.photos[i].is_primary = false;
            }            
          }
          for (var i=0; i < $scope.photos.length; i++) {
            if ($scope.photos[i].id == $stateParams.id) {
              $scope.photos[i] = data;
              break;
            }
          }
          console.log("Successfully updated photo!")
          flash("Successfully updated photo!")
          $state.go('^');
        }).error(function (data, status, headers, config) {
          console.log('Error status: ' + status);
          $scope.errors = data;
        });
      }
    }])
    .controller('NewPhotoCtrl', [
    '$scope', '$state', 'flash', 'Upload',
    function($scope, $state, flash, Upload) {
      $scope.save = function(fd) {
        var file = fd.image;
        Upload.upload({
          url: '/api/photos',
          method: 'POST',
          data: {
            photo: {
              image: file,
              title: (fd.title == null) ? "" : fd.title,
              photographer: (fd.photographer == null) ? "" : fd.photographer,
              is_primary: fd.is_primary 
            }
          }
        }).progress(function (evt) {
          $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          console.log('Progress: ' + $scope.progress + '%');
        }).success(function (data, status, headers, config) {
          if (data.is_primary == true) {
            for (var i=0; i < $scope.photos.length; i++) {
              $scope.photos[i].is_primary = false;
            }
          }
          console.log('Successfully saved photo!');
          flash('Successfully saved photo!');
          $scope.photos.push(data);
          $state.go('^');
        }).error(function (data, status, headers, config) {
          console.log('Error status: ' + status);
          $scope.errors = data;
        });
      }
    }]);
})();