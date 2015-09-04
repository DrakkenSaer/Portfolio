(function() {
  'use strict';

  angular
    .module('controllers.sessions', [])
    .controller('SessionsCtrl', ['$scope', 'flash', function ($scope, flash) {      
      $scope.$on('auth:login-error', function(ev, reason) {
        $scope.error = reason.errors[0];
      });
      
      $scope.$on('auth:login-success', function() {
        $scope.error = null;
      });

      // WIP - fix this flash
      if ($scope.user) {
        flash('info', 'You are already signed in!')
      }
    }]);


  angular
    .module('app')
    .run(['$rootScope','$state', function ($rootScope, $state) {
      $rootScope.$on('auth:login-success', function() {
        $state.go('home');
        console.log('Redirected to home page: User logged in');
      });

      $rootScope.$on('auth:logout-success', function() {
        $state.go('home');
        console.log('Redirected to home page: User logged out');
      });

      $rootScope.$on('auth:validateUser', function() {
        $state.path('home');
        console.log('Redirected to home page: Unauthorized request for secure page');
      });
    }]);
})();
