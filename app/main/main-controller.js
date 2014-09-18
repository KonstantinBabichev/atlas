'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {

    $scope.scopedObject = [
      {
        'key': 'angular',
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'made up thing': 'filled in',
        'an array': ['arrayItem1','arrayItem2','arrayItem1'],
        'an object': {'objectKey1':'objectValue1','objectKey2':'objectValue2'}
      },
      {
        'key': 'browsersync',
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'made up thing': '0'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
