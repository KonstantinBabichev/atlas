'use strict';

angular.module('angularApp')
	.directive('show', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/show/show.html',
			link: function(scope, element, attrs, fn) {


			}
		};
});
