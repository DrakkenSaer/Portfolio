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
        abstract: true,
        template: '<ui-view/>',
        resolve: {
          jobs: ['JobFactory', function(JobFactory){
            return JobFactory.query().$promise;
          }],
          photos: ['PhotoFactory', function(PhotoFactory){
            return PhotoFactory.query().$promise;
          }],
          projects: ['ProjectFactory', function(ProjectFactory){
            return ProjectFactory.query().$promise;
          }]
        }
      })
        .state('root.home', {
        url: "/",
        templateUrl: "pages/home.html",
        title: "Home",
        container: "page-wrapper",
        controller: "HomeCtrl"
      })
        .state('root.about', {
        url: "/about",
        templateUrl: "pages/about.html",
        title: "About Me"
      })
        .state('root.jobs', {
        url: "/jobs",
        templateUrl: "jobs/index.html",
        title: "Work History",
        controller: "JobsCtrl"
      })
        .state('root.jobs.show', {
        url: "/{id:int}",
        templateUrl: "jobs/show.html",
        title: "Work History",
        controller: "JobCtrl",
        resolve: {
          job: ['$stateParams', 'jobs', function($stateParams, jobs){
            return jobs.filter(function(data) {
              return data.id == $stateParams.id;
            });
          }]
        }
      })
        .state('root.jobs.edit', {
        url: "/{id:int}/edit",
        templateUrl: "jobs/edit.html",
        title: "Edit Work History",
        controller: "EditJobCtrl",
        resolve: {
          job: ['$stateParams', 'jobs', function($stateParams, jobs){
            return jobs.filter(function(data) {
              return data.id == $stateParams.id;
            });
          }],
          auth: ['$auth', function($auth){
            return $auth.validateUser();
          }]
        }
      })
        .state('root.jobs.new', {
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
        .state('root.login', {
        url: "/login",
        templateUrl: "sessions/new.html",
        title: "Admin Login",
        controller: "SessionsCtrl"
      })
        .state('root.contact', {
        url: "/contact",
        templateUrl: "messages/new.html",
        title: "Contact Me",
        controller: "NewMessageCtrl"
      })
        .state('root.messages', {
        url: "/messages",
        templateUrl: "messages/index.html",
        title: "Messages",
        controller: "MessagesCtrl",
        resolve: {
          auth: ['$auth', function($auth){
            return $auth.validateUser();
          }],
          messages: ['MessageFactory', function(MessageFactory){
            return MessageFactory.query().$promise;
          }]
        }
      })
        .state('root.messages.show', {
        url: "/{id:int}",
        templateUrl: "messages/show.html",
        controller: "MessageCtrl",
        resolve: {
          message: ['$stateParams', 'messages', function($stateParams, messages){
            return messages.filter(function(data) {
              return data.id == $stateParams.id;
            });
          }]
        }
      })
        .state('root.resume', {
        url: "/resume",
        templateUrl: "resume/index.html",
        title: "Resume",
        controller: "ResumeCtrl"
      })
        .state('root.portfolio', {
        url: "/portfolio",
        templateUrl: "pages/portfolio.html",
        title: "Portfolio",
        controller: "PortfolioCtrl"
      })
        .state('root.photos', {
        url: "/photos",
        templateUrl: "photos/index.html",
        title: "Photography",
        controller: "PhotosCtrl"
      })
        .state('root.photos.edit', {
        url: "/{id:int}/edit",
        templateUrl: "photos/edit.html",
        title: "Edit Photo",
        controller: "EditPhotoCtrl",
        resolve: {
          photo: ['$stateParams', 'photos', function($stateParams, photos){
            return photos.filter(function(data) {
              return data.id == $stateParams.id;
            });
          }],
          auth: ['$auth', function($auth){
            return $auth.validateUser();
          }]
        }
      })
        .state('root.photos.new', {
        url: "/new",
        templateUrl: "photos/new.html",
        title: "New Photo",
        controller: "NewPhotoCtrl"
      })
        .state('root.projects', {
        url: "/projects",
        templateUrl: "projects/index.html",
        title: "Projects",
        controller: "ProjectsCtrl"
      })
        .state('root.projects.show', {
        url: "/{id:int}",
        templateUrl: "projects/show.html",
        title: "Projects",
        controller: "ProjectCtrl",
        resolve: {
          project: ['$stateParams', 'projects', function($stateParams, projects){
            return projects.filter(function(data) {
              return data.id == $stateParams.id;
            });
          }]
        }
      })
        .state('root.projects.edit', {
        url: "/{id:int}/edit",
        templateUrl: "projects/edit.html",
        title: "Edit Project",
        controller: "EditProjectCtrl",
        resolve: {
          project: ['$stateParams', 'projects', function($stateParams, projects){
            return projects.filter(function(data) {
              return data.id == $stateParams.id;
            });
          }],
          auth: ['$auth', function($auth){
            return $auth.validateUser();
          }]
        }
      })
        .state('root.projects.new', {
        url: "/new",
        templateUrl: "projects/new.html",
        title: "New Project",
        controller: "NewProjectCtrl",
        resolve: {
          auth: ['$auth', function($auth){
            return $auth.validateUser();
          }]
        }
      });
    }
  ]);
})();