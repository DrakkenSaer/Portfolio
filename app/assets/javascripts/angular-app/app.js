// https://books.google.com/books?id=p7uyWPcVGZsC&pg=PA1&source=gbs_toc_r&cad=3#v=onepage&q&f=false
// Closer Development Guide

// https://github.com/johnpapa/angular-styleguide
// Community based AngularJS recommendations

(function() {
  'use strict';

  angular.module('app', [
    'templates', 
    'ngResource', 
    'angularVideoBg', 
    'ng-token-auth',
    'ui.router',
    'ngFileUpload',
    'flash',
    'duScroll',
    'duParallax',
    'app.routes',
    'app.directives',
    'app.controllers',
    'app.services'
  ])
    .run(['$state', function($state){
      return console.log('Angular: Up and running');
    }]);
})();