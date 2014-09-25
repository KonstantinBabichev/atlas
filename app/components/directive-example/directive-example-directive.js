'use strict';

angular.module('angularApp')
  .directive('directiveExample', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the example directive');
      }
    };
  });
