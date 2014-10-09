'use strict';

angular.module('angularApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngRoute','templatescache', 'angularObjectViewer'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/login2', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/show/:a/:galleryId', {
        templateUrl: 'components/gallery/gallery.html',
        controller: 'GalleryCtrl',
        resolve: {
          contentItem: function(Restangular, $route){
            return Restangular.one('gallery', $route.current.params.galleryId).get();
          }
        }
      })
      .when('/:a', {
        templateUrl: 'content-type/content-type.html',
        controller: 'ContentTypeCtrl'
      })
      .when('/:a/:contentItem', {
        templateUrl: 'content-item/content-item.html',
        controller: 'ContentItemCtrl',
        resolve: {
          contentItem: function(Restangular, $route){
            return Restangular.one($route.current.params.a, $route.current.params.contentItem).get();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
});

