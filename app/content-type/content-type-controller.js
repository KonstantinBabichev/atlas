'use strict';

angular.module('angularApp')
  .controller('ContentTypeCtrl', function ($scope,Restangular,$route) {

      var contentType = $scope.contentType = $route.current.params.a;
      // creates allContentItems which contains...wait for it...ALL THE CONTENT TYPE'S ITEMS!
      $scope.allContentItems = Restangular.all(contentType).getList().$object;

    });


