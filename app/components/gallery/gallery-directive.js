'use strict';

/**
* @ngdoc directive
* @name angularApp.gallery
*
* @description
* Creates the ```<gallery>``` element
*/

angular.module('angularApp')
	.directive('gallery', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/gallery/gallery.html',
			link: function(scope, element, attrs, fn) {


			}
		};
  });
