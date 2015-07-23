(function() {
  app = angular.module('app', ['templates', 'ngRoute', 'angularVideoBg']);

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
        title: "Home",
        controller: "HomeCtrl"
      })
        .when('/about', {
        templateUrl: "pages/about.html",
        title: "About me"
      })
        .when('/jobs', {
        templateUrl: "jobs/index.html",
        title: "Work history"
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
})();