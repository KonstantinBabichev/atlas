'use strict';

/**
* @ngdoc directive
* @name angularApp.showSmall
*
* @requires angularApp.getGalleries
* @description
* Creates the <pre><show-small></pre> element
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
