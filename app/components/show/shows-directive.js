'use strict';

angular.module('angularApp')
	.directive('shows', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/show/shows.html',
      scope: {
        shows: '='
      },
			link: function(scope, element, attrs, fn) {


			}
		};
});
