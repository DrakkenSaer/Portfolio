app.controller('SessionsCtrl', ['$scope','$location', function ($scope, $location) {
  $scope.$on('auth:login-error', function(ev, reason) {
    $scope.error = reason.errors[0];
}]);

app.run(['$rootScope','$location', function ($rootScope, $location) {
  $rootScope.$on('auth:login-success', 'auth:logout-success', function() {
    $location.path('/');
  });
}]);