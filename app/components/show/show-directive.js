'use strict';

/**
* @ngdoc directive
* @name angularApp.show
*
* @requires angularApp.getGalleries
* @description
* Creates the <show> element
* @scope show
*/

angular.module('angularApp')
	.directive('show', ['getGalleries', function(getGalleries) {
		return {
			restrict: 'E',
			templateUrl: 'components/show/show.html',
      scope: {
        show: '='
      },
			link: function(scope, element, attrs, fn) {

			},
      controller: function($scope){

        getGalleries.galleriesFromShowId($scope.show.id).then(function(result){
          $scope.galleries = result;
        });
      }
		};
  }]);
