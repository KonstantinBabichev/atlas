'use strict';

angular.module('angularApp')
	.directive('show', function(getGalleries) {
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
  })
  .directive('showSmall', function(getGalleries) {
    return {
      restrict: 'E',
      templateUrl: 'components/show/show-small.html',
      scope: {
        show: '='
      },
      link: function(scope, element, attrs, fn) {

      }
    };
  });
