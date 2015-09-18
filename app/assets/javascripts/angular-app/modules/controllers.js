(function() {
  'use strict';

  angular
    .module('app.controllers', [
    'controllers.header',
    'controllers.home',
    'controllers.jobs',
    'controllers.messages',
    'controllers.sessions',
    'controllers.error_messages',
    'controllers.resume',
    'controllers.portfolio'
  ]);
})();