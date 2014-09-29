'use strict';

/**
* @ngdoc directive
* @name angularApp.shows
*
* @requires
* @description
* Creates the <shows> element
* @scope shows
*/

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
