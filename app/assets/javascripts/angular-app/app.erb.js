app = angular.module('app', ['templates', 'ngRoute']);

app.config([
  '$httpProvider', function($httpProvider) {
    return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);

app.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider
      .when('/', {
      templateUrl: "pages/home.html",
      title: "Home"
    })
      .when('/about', {
      templateUrl: "pages/about.html",
      title: "About me"
    })
      .when('/about_partial', {
      templateUrl: "pages/about_partial.html"
    })
    

      .otherwise({
      
    });
  }
]);

app.run(function() {
  return console.log('angular app running');
});

app.controller('TestCtrl', ['$scope', function($scope) {
  $scope.test = "Angular load: Successful";
}]);