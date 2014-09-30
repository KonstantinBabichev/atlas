'use strict';

/**
* @ngdoc directive
* @name angularApp.loginForm
*
* @requires
* @description
* Creates the <login-form> element
*/

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
