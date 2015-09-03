app = angular.module('app', [
  'templates', 
  'ngResource', 
  'angularVideoBg', 
  'ng-token-auth',
  'ui.router',
  'ngFileUpload',
  'flash'
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
        }],
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
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
      .state('jobs.edit', {
      url: "/{id:int}/edit",
      templateUrl: "jobs/edit.html",
      title: "Edit Work History",
      controller: "EditJobCtrl",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
      .state('login', {
      url: "/login",
      templateUrl: "sessions/new.html",
      title: "Admin Login",
      controller: "SessionsCtrl"
    })
      .state('contact', {
      url: "/contact",
      templateUrl: "messages/new.html",
      title: "Contact Me",
      controller: "NewMessageCtrl"
    })
      .state('messages', {
      url: "/messages",
      templateUrl: "messages/index.html",
      title: "Messages",
      controller: "MessagesCtrl",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    });
  }
]);

// Dynamic Title Directive
app.directive('updateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var title = 'Saer Designs';
          if (toState.title) title = toState.title;

          $timeout(function() {
            element.text('Saer Designs | ' + title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);

app.run(function() {
  return console.log('Angular: Up and running');
});

app.controller('TestCtrl', ['$scope', function($scope) {
  $scope.test = "Angular load: Successful";
}]);