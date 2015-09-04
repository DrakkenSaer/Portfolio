(function() {
  'use strict';
  
  angular
    .module('app.routes', [])
    .config([
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
            //attempt to use resource here to resolve job JSON
          }]
        }
      })
        .state('jobs.new', {
        url: "/new",
        templateUrl: "jobs/new.html",
        title: "Add Work History",
        controller: "NewJobCtrl",
        resolve: {
          auth: ['$auth', function($auth) {
            return $auth.validateUser();
          }]
        }
      })
        .state('jobs.edit', {
        url: "/{id:int}/edit",
        templateUrl: "jobs/edit.html",
        title: "Edit Work History",
        controller: "EditJobCtrl",
        resolve: {
          auth: ['$auth', function($auth) {
            return $auth.validateUser();
          }]
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
          auth: ['$auth', function($auth) {
            return $auth.validateUser();
          }]
        }
      });
    }
  ]);
})();