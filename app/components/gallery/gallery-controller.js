'use strict';

/**
* @ngdoc service
* @name angularApp.GalleryCtrl
*
* @requires angularApp.getShow
* @description
* Controller that calls REST service to retrieve a single gallery's object. Also grabs the gallery's parent show object using the getShow factory's showFromShowId method
*/

angular.module('angularApp')
  .controller('GalleryCtrl', ['$scope', 'Restangular', 'contentItem', 'getShow', function ($scope, Restangular, contentItem, getShow) {
    var original = contentItem;
    $scope.gallery = Restangular.copy(original);

    getShow.showFromShowId(original.show[0].id).then(function(result){
      $scope.show = result;
    });
  }]);
