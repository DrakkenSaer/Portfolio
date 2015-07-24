app.controller('HomeCtrl',['$scope', '$location', function($scope, $location) {
    $scope.isNotActive = function(route) {
        return route != $location.path();
    };
}]);