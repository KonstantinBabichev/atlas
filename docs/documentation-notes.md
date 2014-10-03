# Atlas Documentation

## MVP
* list all js files
* @name h2 title
* @description
* @requires

## Lofty Goals
* mimic functionality of angular docs
* list each file by section (include folders) and components
* file type (controller, directive, etc)
* more and more details
* left hand navigation, file NAME is content/title of Ahref
	* click link, changes main section with details
	
## What's Happened
* created a template file from ./node_modules/dgeni-packages/ngdoc/templates/api/api.template.html
* warped it for Atlas, placed in /docs/templates
* created a temp library in gulp-html-globbing (totally wrong)
	* TODO: make header
	* don't show dependencies if NONE (dgeni)