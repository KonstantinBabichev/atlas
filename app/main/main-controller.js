'use strict';

/**
* @ngdoc controller
* @name angularApp.MainCtrl
*
* @requires $scope
* @description
* Creates an example object
*/

angular.module('angularApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.scopedObject = [
      {
        'key': 'bravo',
        'title': 'Bravo TV',
        'url': 'http://bravotv.com',
        'description': 'The Real Housewives of New York City, The Singles Project ...',
        'an array': ['arrayItem1','arrayItem2','arrayItem1'],
        'an object': {'objectKey1':'objectValue1','objectKey2':'objectValue2'}
      },
      {
        'key': 'syfy',
        'title': 'Syfy: Imagine Greater',
        'url': 'http://syfy.com',
        'description': 'Syfy is a media destination for imagination-based entertainment.',
        'an array': ['syfyarrayItem1','syfyarrayItem2','syfyarrayItem1'],
        'an object': {'syfyobjectKey1':'objectValue1syfy','syfyobjectKey2':'objectValue2syfy'}
      }
    ];
  }]);
