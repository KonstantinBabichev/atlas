'use strict';

/**
* @ngdoc controller
* @name angularApp.ContentTypeCtrl
*
* @requires $scope, $route, Restangular
* @description
* Takes the first parameter of the URL and checks our REST service. Response from service is an object added to the scope as 'allContentItems'
*/

angular.module('angularApp')
  .controller('ContentTypeCtrl', ['$scope', '$route', 'Restangular', function ($scope, $route, Restangular) {

      var contentType = $scope.contentType = $route.current.params.a;
      // // creates allContentItems which contains...wait for it...ALL THE CONTENT TYPE'S ITEMS!
      $scope.allContentItems = Restangular.all(contentType).getList().$object;

    }]);


