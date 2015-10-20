(function() {
  'use strict';

  angular
    .module('app.services', [
    'services.jobs',
    'services.messages',
    'services.photos',
    'services.projects',
    'services.resume'
  ]);
})();