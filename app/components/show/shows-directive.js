'use strict';

angular.module('angularApp')
	.directive('shows', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/show/shows.html',
			link: function(scope, element, attrs, fn) {


			}
		};
});
