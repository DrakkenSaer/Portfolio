app.controller('SessionsCtrl', ['$scope', function ($scope) {
  $scope.$on('auth:login-error', function(ev, reason) {
    $scope.error = reason.errors[0];
  })
}]);


app.run(['$rootScope','$state', function ($rootScope, $state) {
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