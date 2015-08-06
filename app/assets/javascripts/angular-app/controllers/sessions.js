app.controller('SessionsCtrl', ['$scope','$location', function ($scope, $location) {
  $scope.$on('auth:login-error', function(ev, reason) {
    $scope.error = reason.errors[0];
  });
  
  $scope.$on('auth:login-success', function() {
    $location.path('/');
  });
}]);