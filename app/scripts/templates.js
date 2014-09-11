angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("login/login.html","the login page\n\n<login-form></login-form>");
$templateCache.put("main/main.html","<h1>MAIN: Home Page Land</h1>\n\n<h2>An Object on the $scope:</h2>\n\n<div ng-repeat=\"object in scopedObject\">\n  <object-viewer></object-viewer>\n</div>\n");
$templateCache.put("components/login-form/login-form.html","<form>\n	<fieldset>\n		<legend>Login Form:</legend>\n		<label class=\"text--label\" for=\"username\">username</label>\n		<input class=\"text--MAIN\" id=\"username\" type=\"input\" name=\"username\">\n		<label class=\"text--label\" for=\"password\">password</label>\n		<input class=\"text--MAIN\" id=\"password\" type=\"password\" name=\"password\">\n	</fieldset>\n	<button type=\"submit\">login</button>\n</form>	");
$templateCache.put("components/object-viewer/object-viewer.html","<div class=\"object--MAIN\">\n  <dl ng-repeat=\"(key, value) in object\" ng-show=\"value\" class=\"object--property\">\n    <dt class=\"object--key\">{{key}}</dt>\n    <dd class=\"object--value\">{{value}}</dd>\n  </dl>\n</div>\n");}]);