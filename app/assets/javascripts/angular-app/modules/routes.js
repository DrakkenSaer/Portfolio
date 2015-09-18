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
        .state('root', {
        url: "/",
        templateUrl: "pages/home.html",
        title: "Home",
        container: "page-wrapper",
        controller: "HomeCtrl",
        resolve: {
          jobs: ['$resource', function($resource){
            return $resource('/api/home').query().$promise;
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
          jobs: ['JobFactory', function(JobFactory){
            return JobFactory.query().$promise;
          }]
        }
      })
        .state('jobs.show', {
        url: "/{id:int}",
        templateUrl: "jobs/show.html",
        title: "Work History",
        controller: "JobCtrl",
        resolve: {
          job: ['$stateParams', 'JobFactory', function($stateParams, JobFactory){
            return JobFactory.get({id: $stateParams.id}).$promise;
          }]
        }
      })
        .state('jobs.new', {
        url: "/new",
        templateUrl: "jobs/new.html",
        title: "Add Work History",
        controller: "NewJobCtrl",
        resolve: {
          auth: ['$auth', function($auth){
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
          auth: ['$auth', function($auth){
            return $auth.validateUser();
          }],
          job: ['$stateParams', 'JobFactory', function($stateParams, JobFactory){
            return JobFactory.get({id: $stateParams.id}).$promise;
          }]
        }
      })
        .state('login', {
        url: "/login",
        templateUrl: "sessions/new.html",
        title: "Admin Login",
        controller: "SessionsCtrl",
        resolve: {
          http: ['$http', function($http){
            return $http.get('login');
          }]
        }
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
          auth: ['$auth', function($auth){
            return $auth.validateUser();
          }],
          messages: ['$stateParams', 'MessageFactory', function($stateParams, MessageFactory){
            return MessageFactory.query().$promise;
          }]
        }
      })
        .state('messages.show', {
        url: "/{id:int}",
        templateUrl: "messages/show.html",
        controller: "MessageCtrl",
        resolve: {
          message: ['$stateParams', 'MessageFactory', function($stateParams, MessageFactory){
            return MessageFactory.get({id: $stateParams.id}).$promise;
          }]
        }
      })
        .state('resume', {
        url: "/resume",
        templateUrl: "resume/index.html",
        title: "Resume",
        controller: "ResumeCtrl",
        resolve: {
          jobs: ['$resource', function($resource){
            return $resource('/api/resume').query().$promise;
          }]
        }
      })
        .state('portfolio', {
        url: "/portfolio",
        templateUrl: "pages/portfolio.html",
        title: "Portfolio",
        controller: "PortfolioCtrl",
        resolve: {
          photos: ['PhotoFactory', function(PhotoFactory){
            return PhotoFactory.query().$promise;
          }],
          projects: ['ProjectFactory', function(ProjectFactory){
            return ProjectFactory.query().$promise;
          }]
        }
      })
        .state('portfolio.photos', {
        url: "/photos",
        templateUrl: "photos/index.html",
        title: "Photos",
        controller: "PhotosCtrl",
        resolve: {
          photos: ['$resource', function($resource){

          }]
        }
      })
        .state('portfolio.projects', {
        url: "/projects",
        templateUrl: "projects/index.html",
        title: "Projects",
        controller: "ProjectsCtrl",
        resolve: {
          project: ['$resource', function($resource){

          }]
        }
      });
    }
  ]);
})();