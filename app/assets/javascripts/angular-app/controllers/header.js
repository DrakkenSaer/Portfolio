app.controller('HeaderCtrl',['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
    $scope.test = "This is a test";
}]);