'use strict';

angular.module('angularApp')
	.directive('gallery', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/gallery/gallery.html',
			link: function(scope, element, attrs, fn) {


			}
		};
  })
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
