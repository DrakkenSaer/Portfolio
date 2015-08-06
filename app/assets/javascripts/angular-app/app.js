(function() {
  app = angular.module('app', ['templates', 'ngRoute', 'ngResource', 'angularVideoBg', 'ng-token-auth']);

  app.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      return $routeProvider
        .when('/', {
        templateUrl: "pages/home.html",
        title: "Home",
        controller: "HomeCtrl"
      })
        .when('/about', {
        templateUrl: "pages/about.html",
        title: "About Me"
      })
        .when('/jobs', {
        templateUrl: "jobs/index.html",
        title: "Work History",
        controller: "JobsCtrl"
      })
        .when('/jobs/:jobId', {
        templateUrl: "jobs/show.html",
        title: "Work History",
        controller: "JobCtrl"
      })
        .when('/login', {
        templateUrl: "sessions/new.html",
        title: "Admin Login",
        controller: "SessionsCtrl"
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