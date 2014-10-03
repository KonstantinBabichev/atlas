'use strict';

/**
* @ngdoc directive
* @name angularApp.galleries
*
* @description
* Creates the ```<galleries>``` element
*/

angular.module('angularApp')
	.directive('galleries', [ function() {
		return {
			restrict: 'E',
			templateUrl: 'components/gallery/galleries.html',
			link: function(scope, element, attrs, fn) {


			}
		};
  }]);
