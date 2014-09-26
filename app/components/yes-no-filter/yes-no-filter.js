
'use strict';

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
