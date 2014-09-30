'use strict';

/**
* @ngdoc directive
* @name angularApp.gallerySmall
*
* @requires
* @description
* Creates the <gallery-small> element
* @scope gallery
*/

angular.module('angularApp')
  .directive('gallerySmall', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/gallery/gallery-small.html',
      scope: {
        gallery: '='
      },
      link: function(scope, element, attrs, fn) {


      }
    };
  });
