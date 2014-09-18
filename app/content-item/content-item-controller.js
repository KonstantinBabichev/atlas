'use strict';

angular.module('angularApp')
  .controller('ContentItemCtrl', function ($scope, Restangular, contentItem, $route) {
    var original = contentItem;
    var contentType = $scope.contentType = $route.current.params.a;

    switch(contentType) {
      case 'show':
        $scope.show = Restangular.copy(original);
        break;
      case 'gallery':
        $scope.gallery = Restangular.copy(original);
        break;
    }

  });
