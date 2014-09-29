'use strict';

/**
* @ngdoc directive
* @name angularApp.objectViewer
*
* @requires RecursionHelper
* @description
* Creates the <object-viewer> html element, which breaks down an object's parts and gives each part an html wrapper
*/

angular.module('angularApp')
	.directive('objectViewer',['RecursionHelper', function(RecursionHelper) {
		return {
			restrict: 'E',
			templateUrl: 'components/object-viewer/object-viewer.html',
      scope: {object: '='},
      compile: function(element) {
        return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
          // Define your normal link function here.
          // Alternative: instead of passing a function,
          // you can also pass an object with
          // a 'pre'- and 'post'-link function.
        });
      },
      controller: function($scope){
        $scope.test = function (value){
          if (angular.isFunction(value)) {
            return null;
          }
          return value;
        };
      },
			link: function(scope, element, attrs, fn) {
        //var tester = "a test again";

			}
		};
  }]);
