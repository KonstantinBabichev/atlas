'use strict';

/**
* @ngdoc controller
* @name angularApp.GalleryCtrl
*
* @requires $scope, Restangular, contentItem, getShow
* @description
* Calls REST service to retrieve a single gallery's object. Also grabs the gallery's parent show object using the getShow factory's showFromShowId method
*/

angular.module('angularApp')
  .controller('GalleryCtrl', ['$scope', 'Restangular', 'contentItem', 'getShow', function ($scope, Restangular, contentItem, getShow) {
    var original = contentItem;
    $scope.gallery = Restangular.copy(original);

    getShow.showFromShowId(original.show[0].id).then(function(result){
      $scope.show = result;
    });
  }]);
