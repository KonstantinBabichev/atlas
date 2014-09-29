'use strict';

/**
* @ngdoc filter
* @name angularApp.checkValueType
*
* @requires
* @description
* Returns the item's type
* @param {unknown} item
* @return {string}
*/

angular.module('angularApp')
  .filter('checkValueType', function () {
    return function (item) {
      if(angular.isArray(item)){
        return 'array';
      }else if(angular.isObject(item)){
        return 'object';
      }else if(angular.isFunction(item)){
        return 'function';
      }else{
        return 'string';
      }
    };
  });
