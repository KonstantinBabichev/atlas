'use strict';
angular.module('angularApp')
  .factory('getShow', function ($filter, Restangular){

    return {
      showFromShowId: function(showId){
        return Restangular.one('show', showId).get().then(function(result){
          return result;
        });
      }
    };
  });
