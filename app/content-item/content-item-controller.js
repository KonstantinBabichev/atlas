'use strict';

/**
* @ngdoc controller
* @name angularApp.ContentItemCtrl
*
* @requires $scope, $route, Restangular, contentItem
* @description
* Takes the first and second parameters of the URL and checks our REST service. Response from service is an single object added to the scope as 'contentItem'
*/

angular.module('angularApp')
  .controller('ContentItemCtrl', ['$scope', '$route', 'Restangular', 'contentItem', function ($scope, $route, Restangular, contentItem) {
    var original = contentItem;
    var contentType = $scope.contentType = $route.current.params.a;
    $scope.contentItem = Restangular.copy(original);

  }]);
