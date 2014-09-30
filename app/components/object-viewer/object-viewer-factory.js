'use strict';

/**
* @ngdoc filter
* @name angularApp.RecursionHelper
*
* @description
* An Angular service which helps with creating recursive directives.
* @author Mark Lagendijk
* @license MIT
* @source: http://stackoverflow.com/questions/14430655/recursion-in-angular-directives / http://plnkr.co/edit/JAIyolmqPqO9KsynSiZp?p=preview
*/

angular.module('angularApp')
  .factory('RecursionHelper', ['$compile', function($compile){
    return {
      /**
      * @ngdoc method
      * @name angularApp.RecursionHelper#compile
      * @methodOf angularApp.RecursionHelper
      * @description
      * Manually compiles the element, fixing the recursion loop.
      * @param element
      * @param [link] A post-link function, or an object with function(s) registered via pre and post properties.
      * @returns An object containing the linking functions.
      */
      compile: function(element, link){
        // Normalize the link parameter
        if(angular.isFunction(link)){
          link = { post: link };
        }

        // Break the recursion loop by removing the contents
        var contents = element.contents().remove();
        var compiledContents;
        return {
          pre: (link && link.pre) ? link.pre : null,
          /**
           * Compiles and re-adds the contents
           */
          post: function(scope, element){
            // Compile the contents
            if(!compiledContents){
              compiledContents = $compile(contents);
            }
            // Re-add the compiled contents to the element
            compiledContents(scope, function(clone){
              element.append(clone);
            });

            // Call the post-linking function, if any
            if(link && link.post){
              link.post.apply(null, arguments);
            }
          }
        };
      }
    };
  }]);
