'use strict';

angular.module('angularApp')
	.directive('loginForm', function() {
		return {
			restrict: 'E',
			replace: true,
			scope: {

			},
			templateUrl: 'components/login-form/login-form.html',
			link: function(scope, element, attrs, fn) {


			}
		};
});
