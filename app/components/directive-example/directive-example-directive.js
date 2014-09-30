'use strict';

/**
* @ngdoc directive
* @name angularApp.directiveExample
*
* @description
* Creates an empty DIV, fills it with small text. This is an example, non templateUrl directive here as a basis for building the Yeoman generator.
*/

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
