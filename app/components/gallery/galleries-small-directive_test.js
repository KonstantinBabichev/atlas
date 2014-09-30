'use strict';

/**
* @ngdoc directive
* @name angularApp.galleriesSmall
*
* @requires getGalleries
* @description
* Creates the <galleries-small> element
* @scope galleries
*/

angular.module('angularApp')
  .directive('galleriesSmall', ['getGalleries', function(getGalleries) {
    return {
      restrict: 'E',
      templateUrl: 'components/gallery/galleries-small.html',
      scope: {
        galleries: '='
      },
      link: function(scope, element, attrs, fn) {


      }
    };
  }]);
