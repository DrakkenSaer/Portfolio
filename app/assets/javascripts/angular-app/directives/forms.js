(function() {
  'use strict';

  angular
    .module('app')
    .directive('formErrors', function() {
    // this should be responsible for pushing server side error responses to AngularJS form.field.$error
  });
})();