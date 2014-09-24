'use strict';

angular.module('angularApp')
  .controller('GalleryCtrl', function ($scope, Restangular, contentItem, getShow) {
    var original = contentItem;
    $scope.gallery = Restangular.copy(original);

    getShow.showFromShowId(original.show[0].id).then(function(result){
      $scope.show = result;
    });
  });
