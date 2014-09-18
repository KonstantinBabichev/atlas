angular.module('angularApp')
  .filter('checkValueType', function () {
    return function (item) {
      if(angular.isArray(item)){
        return 'array';
      }else if(angular.isObject(item)){
        return 'object';
      }else{
        return 'string';
      }
    };
  });
