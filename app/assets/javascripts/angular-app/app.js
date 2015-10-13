// https://books.google.com/books?id=p7uyWPcVGZsC&pg=PA1&source=gbs_toc_r&cad=3#v=onepage&q&f=false
// Closer Development Guide

// https://github.com/johnpapa/angular-styleguide
// Community based AngularJS recommendations

(function() {
  'use strict';

  angular.module('app', [
    'templates', 
    'ngResource', 
    'ng-token-auth',
    'ui.router',
    'ngFileUpload',
    'flash',
    'duScroll',
    'duParallax',
    'toggle-switch',
    'headroom',
    'app.routes',
    'app.directives',
    'app.controllers',
    'app.services'
  ])
    .run(function(){
      return console.log('Angular: Up and running');
    });
})();