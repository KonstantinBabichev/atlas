'use strict';
angular.module('angularApp')
  .factory('getGalleries', function ($filter, Restangular){

    return {
      galleriesFromShowId: function(showId){
        return Restangular.all('gallery').getList({show: showId}).then(function(result){
          return result;
        });
      }
    };
  });
