app = angular.module('app', [
  'templates', 
  'ngResource', 
  'angularVideoBg', 
  'ng-token-auth',
  'ui.router'
]);

app.config([
  '$stateProvider', '$locationProvider', '$urlRouterProvider', 
  function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
      url: "/",
      templateUrl: "pages/home.html",
      title: "Home",
      controller: "HomeCtrl",
      resolve: {
        jobs: ['$http', function($http){
          return $http({ method: 'GET', url:'/api/home' });
        }]
      }
    })
      .state('about', {
      url: "/about",
      templateUrl: "pages/about.html",
      title: "About Me"
    })
      .state('jobs', {
      url: "/jobs",
      templateUrl: "jobs/index.html",
      title: "Work History",
      controller: "JobsCtrl",
      resolve: {
        jobs: ['$http', function($http){
          return $http({ method: 'GET', url:'/api/jobs' });
        }]
      }
    })
      .state('jobs.show', {
      url: "/{id:int}",
      templateUrl: "jobs/show.html",
      title: "Work History",
      controller: "JobCtrl",
      resolve: {
        job: [function(){
          
        }]
      }
    })
      .state('jobs.new', {
      url: "/new",
      templateUrl: "jobs/new.html",
      title: "Add Work History",
      controller: "NewJobCtrl",
    })
      .state('login', {
      url: "/login",
      templateUrl: "sessions/new.html",
      title: "Admin Login",
      controller: "SessionsCtrl"
    });
  }
]);


app.run(function() {
  return console.log('Angular: Up and running');
});

app.controller('TestCtrl', ['$scope', function($scope) {
  $scope.test = "Angular load: Successful";
}]);