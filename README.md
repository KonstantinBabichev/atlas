Atlas
=====


## What is this?
**A Proposed Angular Application Architecture**
I need an angular application for my job. I'm coming up with the best overall structure, using the current best-practices, and following the specific needs of my company.

## What are those needs?
They are long and varied. For full details, please see this document:
[architecture-needs-and-solutions.md](architecture-needs-and-solutions.md)

### Short version:
* Uses Gulp as a taskrunner
* Compass/SASS compilation (we do not use LESS)
* Dev environment with server/browser sync, linting, testing
* [Google's file/folder structure](https://docs.google.com/a/scottnath.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)
* Full distribution/build creation

## Requirements

### You will need to install these
* [Ruby](http://www.ruby-lang.org/en/downloads/)
* [compass/sass](http://compass-style.org/install/) globally installed
* [scss-lint](https://github.com/causes/scss-lint#installation) globally installed
* [node.js](http://nodejs.org)

### Node-Installed items:
* bower
* gulp

## Installation

First, download this repo and ```cd``` into its directory

### Install Bower/Node Components in repo
```bower install && npm install```

### Start Server

```gulp ```


---

## What happens next
After feedback, I will make a Yeoman Generator of the final app system

---

## Questions/Concerns/Bugs I have
21. auto-save /build to branch:gh-pages
22. need to set up browsersync to use IP for multi-devices
20. watch all html templates and auto-add to templates.js
	* watch does not see new files or folders
	* watch is not picking up new files! gulp-watch should be fixing this issue...it is not (test code in dev:html:convert)
1. check only newly-changed files https://github.com/juanfran/gulp-scss-lint#lint-only-modified-files, https://github.com/wearefractal/gulp-cached
2. In-code notes should match drupal rules

### Publisher
4. gallery: borealis + transform
5. incorporate proper gallery HTML
6. remove unnecessary code/files

### Gulp specific
1. Move config files into /gulp/configs
8. Consistent gulp messaging
11. Add gulp [plumber](https://github.com/floatdrop/gulp-plumber) so we don't crash on errors
    * [simple-and-awesome-gulp-setup](http://www.kycosoftware.com/blog/article/simple-and-awesome-gulp-setup)
    * [how-to-basic-tasks-in-gulp-js](http://ilikekillnerds.com/2014/07/how-to-basic-tasks-in-gulp-js/)
    * [how-to-handle-gulp-watch-errors-with-plumber](http://cameronspear.com/blog/how-to-handle-gulp-watch-errors-with-plumber)
    * NOTE: crashing on errors is fixed in gulp 4.0, eta tbd
13. Error sounds/messages
14. How to install compass plugins like singularity + breakpoint

### Compass/css specific
1. Is there a way to compile Compass/SASS using Node instead of Ruby?
7. ~~COMPASS: Compass doesn't seem to be compiling correctly~~
    * multiple styles for same element are in separate elements in file
    * THIS IS CORRECT. Nature of css, changes may come from below, thus an element can re-appear and be changed later.
15. COMPASS: Can I get compass to auto-include all .scss files without adding them to the main (styles.scss)? 
    * **works now!**
    * TODO: perform this update *only* when there is a *NEW* or *REMOVED* .scss file
16. NORTH scss structure!

### Bower specific
16. bower file handling and conversion/minification not complete
19. Bower files minification creates bugs
20. example for a bower-added angular template

## Research
* UI-Route vs Angular Route
* change /app to /dev or /development?


# Bugs that were fixed, and how
1. When trying to use Gulp's built-in **gulp-watch** to track eslint I'm getting ```Error: EMFILE, too many open files```
    * most tubes pointed to a problem with the open-file limit of 256 files on macs
    * terminal commands to increase this limit by changing ulimit did not help
    * followed instructions here: http://unix.stackexchange.com/questions/108174/how-to-persist-ulimit-settings-in-osx-mavericks
        * instructions said to change /etc/launchd.conf and /etc/profile
        * this stopped the EMFILE error which was killing gulp, but showed new errors: 
        ```2014-08-27 17:08 gulp [581] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)```
        * the carboncore error was repeated in the terminal almost 500 times after running ```gulp```
    * [Further investigation](https://github.com/floatdrop/gulp-watch/issues/7) showed that this was an issue with using Gulp's built-in gulp-watch, so I installed [gulp-watch](https://www.npmjs.org/package/gulp-watch) instead
        * this cleared the carboncore error completely
        * I removed the changes to *both* /etc/launchd.conf and /etc/profile, restarted my machine and both original errors (EMFILE and CarbonCore) did not return
2. Angular Configuration blocks and .run and $templatecache don't play nice. The solution for [HTML Production Conversion](architecture-needs-and-solutions.md#html-convert) created *all* of our html templates into a *single* module which then could be included as a dependency in our main module. This fixed routing too as the templates automagically work without using $templateCache.get().

## Lofty Goals
* Pull in complete angular components via Package Manager
    * first test component will be the Object Viewer
    * need to figure out how to construct the components to match system
    * https://github.com/angular/material
* Pull in html patterns via Package Manager and create directives from them
* Choice for pulled-in items
    * Use as is, allowing fresh pull-requests
    * Add to system as editable code
* For publisher gallery, research/find mostly-css-transform-based gallery
* For publisher shows, follow [erin's guidelines](https://github.com/NBCUOTS/pavo/issues/63#issuecomment-56210523) and a more generic system
	* this follows to how we can use the component library!
* different /app profiles available
	* publisher/drupal
	* firebase
		* basic setup YOURFIREBASEACCT/YOURFIREBASEPASS/YOURFIREBASEDB
		* inlcude object-viewer
	* wordpress
	* browser storage

## Example Publisher Code
Publisher is my employer's version of Drupal. There is functionality in this example system to connect to a test version of Publisher

### Available Content Types

* Show [show.json](http://pubapi.r6by.com/show.json)
* Gallery [show.json](http://pubapi.r6by.com/gallery.json)

### Publisher Factory Details
* TODO: should 'publisher' be a component, with factory and the below as subfolders? 


### URLs
#### All Shows (#/show)
* pre-processed url: #/:a
* controller: /app/content-type/content-type-controller.js (ContentTypeCtrl)
* view: /app/content-type/content-type.html (uses ng-switch on 'contentType')
	* directive: /app/components/show/shows-directive.js (shows)
	* directive-view: /app/components/show/shows.html
		
#### Single Show (#/show/[show.id])
* pre-processed url: #/:a/:contentItem
* controller: /app/content-item/content-item-controller.js (ContentItemCtrl)
* view: /app/content-item/content-item.html (uses ng-switch on 'contentItem')
	* directive: /app/components/show/show-directive.js (show)
	* directive-view: /app/components/show/show.html
		* Factory: /app/components/gallery/galleries-factory.js (getGalleries)
			* Object: galleriesFromShowId returns: Galleries Array from gallery.show[0].id
		* directive: /app/components/gallery/galleries-directive.js (galleriesSmall)
		* directive-view: /app/components/gallery/galleries-small.html
		* directive: /app/components/object-viewer/object-viewer-directive.js (object)
		* directive-view: /app/components/object-viewer/object-viewer.html

#### Single Gallery under a Show (#/show/[show.id]/[gallery.id])
* pre-processed url: #/show/:a/:galleryId
* controller: /app/components/gallery/gallery-controller.js (GalleryCtrl)
* view: /app/components/gallery/gallery.html
	* Factory: /app/components/show/show-factory.js (getShow)
		* Object: showFromShowId returns: Show object from gallery.show[0].id
	* directive: /app/components/show/show-directive.js (showSmall)
	* directive-view: /app/components/show/show-small.html
	* directive: /app/components/object-viewer/object-viewer-directive.js (object)
	* directive-view: /app/components/object-viewer/object-viewer.html
	
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
* /app/components/login-form-directive.js
	* also (in /app/components/login-form)
		* test: login-form-directive_test.js
		* scss: _login-form.scss
		* html: login-form.html
		
### Filter
* (default) stand-alone: /app/components/??-filter/??-filter.js
* sub-component or section filter: /app/components/object-view/??-filter/??-filter.js
* TODO: move check-value-type filter to subfolder
	* also (in either path)
		* test: ??-filter_test.js

### View
* what is a use-case for making *just* a view file?
	* route template? done when making a route
	* directive template? done when making templateUrl directive
	* how else would a view's contents get in the angular system?

### Service
* (default) stand-alone: /app/components/??-service/??-service.js
* sub-component or section service: /app/components/object-view/??-service/??-service.js
	* also (in either path)
		* test: ??-service_test.js
	* TODO: add service in BOTH places
		
### Constant
* (default) in app: /app/scripts/app.js
* sub-component or section constant:  /app/components/object-view/object-view-constants.js
	* TODO: add to app.js

### Factory
* (default) stand-alone: /app/components/??-factory/??-factory.js
* sub-component or section factory: /app/components/object-view/??-factory/??-factory.js
	* also (in either path)
		* test: ??-factory_test.js
	* TODO: add factory in BOTH places

### Provider
?

### Value
?