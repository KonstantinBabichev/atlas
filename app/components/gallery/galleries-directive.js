'use strict';

angular.module('angularApp')
	.directive('galleries', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/gallery/galleries.html',
			link: function(scope, element, attrs, fn) {


			}
		};
});
