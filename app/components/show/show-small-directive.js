'use strict';

/**
* @ngdoc directive
* @name angularApp.showSmall
*
* @requires getGalleries
* @description
* Creates the <show-small> element
* @scope show
*/

angular.module('angularApp')
  .directive('showSmall', ['getGalleries', function(getGalleries) {
    return {
      restrict: 'E',
      templateUrl: 'components/show/show-small.html',
      scope: {
        show: '='
      },
      link: function(scope, element, attrs, fn) {

      }
    };
  }]);
