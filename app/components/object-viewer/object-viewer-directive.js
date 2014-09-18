angular.module('angularApp')
	.directive('objectViewer', function(RecursionHelper) {
		return {
			restrict: 'E',
			templateUrl: 'components/object-viewer/object-viewer.html',
      scope: {object: '='},
      compile: function(element) {
        console.log(element);
        return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
          // Define your normal link function here.
          // Alternative: instead of passing a function,
          // you can also pass an object with
          // a 'pre'- and 'post'-link function.
        });
      },
			link: function(scope, element, attrs, fn) {
        //var tester = "a test again";

			}
		};
});
