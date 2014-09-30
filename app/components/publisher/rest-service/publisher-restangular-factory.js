'use strict';

/**
* @ngdoc property
* @name angularApp.checkValueType
*
* @requires RestangularProvider
* @description
* REST service configuration for our Publisher instance
*/

angular.module('angularApp')
.config(function(RestangularProvider){

  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    var extractedData;

    if (operation === 'getList') {
      extractedData = data.list;
    } else {
      extractedData = data;
    }
    return extractedData;
  });

  RestangularProvider.setBaseUrl('http://pubapi.r6by.com');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setRequestInterceptor(
    function(elem, operation){
      return elem;
    }
  );
});
