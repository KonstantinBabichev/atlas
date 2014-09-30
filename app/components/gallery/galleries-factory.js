'use strict';

/**
* @ngdoc service
* @name angularApp.getGalleries
*
* @description
* Provides methods for getting full gallery objects from our REST service
*/

angular.module('angularApp')
  .factory('getGalleries', function ($filter, Restangular){

    return {
      /**
      * @ngdoc method
      * @name angularApp.getGalleries#galleriesFromShowId
      * @methodOf angularApp.getGalleries
      * @param {string} 'showId' - the id of the show
      * @returns {object} full array of gallery objects from REST service
      */
      galleriesFromShowId: function(showId){
        return Restangular.all('gallery').getList({show: showId}).then(function(result){
          return result;
        });
      }
    };
  });
