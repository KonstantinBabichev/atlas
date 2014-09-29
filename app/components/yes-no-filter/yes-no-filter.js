'use strict';

/**
* @ngdoc filter
* @name angularApp.yesNo
*
* @requires
* @description
* Creates a filter which takes a boolean true/false and turns it into a {string} 'yes'/'no'
*/

angular.module('angularApp')
  .filter('yesNo', function() {
    return function(bool) {
      if(parseInt(bool)){
        return 'yes';
      }else{
        return 'no';
      }
    };
  });
