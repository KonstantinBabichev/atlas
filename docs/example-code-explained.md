## Example Code for each Generator Option
### Route
* /app/scripts/app.js
	* also:
		* *controller* (full)
		* *view template*
	* also-files should be created in /app/name-of-route

### Controller
* /app/main/main-controller.js
	* also (in /app/main):
		* test: main-controller_test.js
		* scss: _main.scss

### Directive
* /app/components/directive-example/directive-example-directive.js
	* also (in /app/components/directive-example)
		* test: directive-example-directive_test.js
		* scss: _directive-example.scss

### TemplateUrl Directive
* /app/components/login-form/login-form-directive.js
	* also (in /app/components/login-form)
		* test: login-form-directive_test.js
		* scss: _login-form.scss
		* html: login-form.html
		
### Filter
* (default) stand-alone: /app/components/yes-no-filter/yes-no-filter.js
	* also
		* test: yes-no-filter_test.js
* component/section: /app/components/object-viewer/check-value-type/check-value-type-filter.js
	* also
		* test: check-value-type-filter_test.js

### View
* what is a use-case for making *just* a view file?
	* route template? done when making a route
	* directive template? done when making templateUrl directive
	* how else would a view's contents get in the angular system?
		
### Constant
* (default) in app: /app/scripts/app.js
* sub-component or section constant:  /app/components/object-view/object-view-constants.js
	* TODO: add to app.js

### Factory
* (default) stand-alone: /app/components/??-factory/??-factory.js
* component/section factory: /app/components/publisher/rest-service/publisher-restangular-factory.js
	* also
		* test: publisher-restangular-factory_test.js
	* TODO: add stand-alone factory in /app/components

### Provider
to do

### Value
to do