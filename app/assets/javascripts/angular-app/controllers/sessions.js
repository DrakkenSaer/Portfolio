(function() {
  'use strict';

  angular
    .module('controllers.sessions', [])
    .controller('SessionsCtrl', ['$scope', 'flash', function ($scope, flash) {      
      $scope.$on('auth:login-error', function(ev, reason) {
        $scope.errors = reason;
      });
      
      $scope.$on('auth:login-success', function() {
        $scope.errors = null;
      });
      
      if ($scope.user.id) {
        flash('info', 'You are already signed in!');
      }
    }]);
  
  angular
    .module('app')
    .config(['$authProvider', function($authProvider) {
    $authProvider.configure({
      apiUrl: '/api'
    });
  }]);

  angular
    .module('app')
    .run(['$rootScope','$state','flash', function ($rootScope, $state, flash) {
      $rootScope.$on('auth:login-success', function() {
        $state.go('root.home');
        flash('absolute', 'Redirected to home page: User logged in');
        console.log('Redirected to home page: User logged in');
      });

      $rootScope.$on('auth:logout-success', function() {
        $state.go('root.home');
        flash('absolute', 'Redirected to home page: User logged out');
        console.log('Redirected to home page: User logged out');
      });

      $rootScope.$on('auth:validateUser', function(ev, reason) {
        $state.path('root.home');
        flash('warning', reason[0]);
        console.log('Redirected to home page: Unauthorized request for secure page');
      });
    }]);
})();