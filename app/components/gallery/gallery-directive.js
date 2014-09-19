angular.module('angularApp')
	.directive('gallery', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/gallery/gallery.html',
			link: function(scope, element, attrs, fn) {


			}
		};
});
