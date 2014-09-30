'use strict';

/**
* @ngdoc service
* @name angularApp.getShow
*
* @description
* Provides methods for getting full show objects from our REST service
*/

angular.module('angularApp')
  .factory('getShow', ['$filter', 'Restangular', function ($filter, Restangular){

    return {
      /**
      * @ngdoc method
      * @name angularApp.getShow#showFromShowId
      * @methodOf angularApp.getShow
      * @param {string} 'showId' - the id of the show
      * @returns {object} full SHOW object from REST service
      */
      showFromShowId: function(showId){
        return Restangular.one('show', showId).get().then(function(result){
          return result;
        });
      }
    };
  }]);
