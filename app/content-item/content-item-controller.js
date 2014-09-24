'use strict';

angular.module('angularApp')
  .controller('ContentItemCtrl', function ($scope, Restangular, contentItem, $route, getGalleries) {
    var original = contentItem;
    var contentType = $scope.contentType = $route.current.params.a;
    $scope.contentItem = Restangular.copy(original);

  });
