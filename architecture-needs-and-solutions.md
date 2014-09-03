# Architecture Needs and Solutions for the Atlas Application

## Table of Contents
  * [Javascript Framework](#javascript-framework)
  * [Taskrunner](#taskrunner)
  * [Compass/SASS Compilation](#compass)
  * [Automatic browser-reload](#browserreload)
  * [Javascript Linting](#javascript-linting)
  * [CSS Linting](#css-linting)
  * [Unit Testing](#unit-testing)
  * [End 2 End Testing](#e2e-testing)
  * [Build Cleaning](#build-cleaning)
  * [Image minification](#image-minification)
  * [File Concatenation](#file-concat)
  * [Javascript Production Conversion](#js-prod)
  * [HTML Optimization](#html-optimization)
  * [CSS Optimization](#css-optimization)
  * [CSS Minification](#css-mini)
  * [Cache buster/Revisio](#revisioning)
  * [HTML->JS Conversion](#html-convert)
  * [General](#general)

---
<a id="javascript-framework"></a>
## Javascript Framework 
The framework we choose will be the workhorse of our application. This is what builds out pages, convert templates, pulls in data, and a million other things.

### Options
* [EmberJS](http://emberjs.com)
* [Backbone](http://backbonejs.org)
* [AngularJS](https://angularjs.org)

As of 2014, these are the top options available. We did extensive research of all three to determine what was best for our purposes. We took into account not just the ease of writing for a particular framework, but also community support, client-side weight, and internal knowledge. For our tests we had different developers create to-do applications with each framework and document ease-of-use, ability to find answers, satisfaction with end result, etc.

#### Backbone?
**Backbone** was fairly easy to rule out. It relied heavily on jQuery, which, as an organization, we are trying to phase out due to how bloated it has become and how [easy its functions are to do with plain javascript](http://youmightnotneedjquery.com). It also does not have data-binding, or any built-in directives, or really any structure. Backbone would be requiring us to start from scratch on a lot of items - which includes creating and documenting our own structure/templates/etc. It also relies on the DOM for understanding your model, which can be error-prone. While backbone has been used by some large sites, it's community support is not massive. A search for "backbonejs" results in 879K google hits.

Third-Party Modules: ~230 [backplugs](http://backplug.io/)

#### Angular?
**Angular** was already popular among many developers here. While it has a steep learning curve, once understood it can be quite powerful. It can be used to build full-scale applications or just single parts of an app - which means understanding of this framework can be translated into functionality in other non-angular systems. Angular proved so versatile that Google sponsors it as an open source project - which means it has full-time employees from a major tech company working to make it better every day. Angularjs has massive developer community and a search for "angularjs" results in 8.5 million google hits.

Third-Party Modules: ~800 [ngmodules](http://ngmodules.org)

#### Ember?
**Ember** has some nice built in features like a router and it's own data layer. It has underdone a bunch of changes since it's inception, which makes a lot of online examples and answer-responses out-of-date and wrong. It was built for performance and it uses handlebars for templating - which gums up the HTML source code adds too much weight to the file size. It should be a contender, but it simply does not have a solid enough developer community for us to get the kind of open-source benefit we need. A search for "emberjs" results in 1.6 million google hits.

Third-Party Modules: ~20 [emberaddons](http://emberaddons.com/)

### Choice: [AngularJS](https://angularjs.org)
#### Features
* Massive community
* Open source and backed by Google
* Extends HTML allowing definition of new elements, behaviors and attributes
    * this will allow non-js developers to understand the html Angular uses
* Two-way data binding
* Written with code-testing in mind
* Multiple unit testing options available

---
<a id="taskrunner"></a>
## Taskrunner
The taskrunner keeps all the pieces of our application running as well as a system to receive commands that run on demand.

### Options
* [Grunt](http://gruntjs.com/)
*  [Gulp](http://gulpjs.com)

Research and [testing](https://github.com/scottnath/gulp-vs-grunt) had Gulp beat out Grunt, proving to be 5 times faster at running tasks.

### Choice: [Gulp](http://gulpjs.com)
#### Features
* Faster task compilation (only writes to disc at end)
* Less code to write
* More javascript-like written instructions

### Gulp Plugins to research:
* [gulp-util](https://github.com/gulpjs/gulp-util)
* [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins)

---
<a id="compass"></a>
## Compass/SASS Compilation

* Alternative to Compass/SASS: LESS
* Reasons for Compass/SASS: used in all our systems, more extensive than LESS

Gulp will be running our Compass Watch task, which will re-write our main css file on any change of any watched .scss file. This task must also throw errors if the code is written incorrectly.

### Choice: [gulp-compass](https://github.com/appleboy/gulp-compass)

### Usage Requirements
* Compass Ruby Gem installed globally
* local config.rb
* sass & css directories
	* can be same directory
	* all sass files must have .scss filename extension

---
<a id="browserreload"></a>
## Automatic browser-reload

### Task Requirements

* Reload browser(s) on file changes
* Triggered by Gulp Watch

### Options
* [Browser Sync](http://browsersync.io)
* [LiveReload](http://livereload.com)

LiveReload has long been the leader, but Shane Osbourne ([@shaneOsbourne](http://twitter.com/shaneOsbourne)) built BrowserSync due to LR's lack of support for older browsers and requirement for a browser plugin to be installed. You can see [details of his reasoning here](http://css-tricks.com/cross-browser-css-injection).

### Choice: [Browser Sync](http://browsersync.io)
#### Features
* Injects CSS changes (not full DOM refresh)
* Refresh across not just browsers, but *devices* as well (via IP)
* No browser plugin required
* Syncs actions across all browsers/devices
	* Scroll position
	* Form Fields
	* Links (going to other pages)
* Built-in  server

---
<a id="javascript-linting"></a>
## JavaScript Linting

### Task Requirements

* Static JS code analysis
* Code quality testing
* Enforce style guidelines

### Options

* [JSHint](http://www.jshint.com)
* [JSLint](http://www.jslint.com)
* [ESLint](https://github.com/eslint/eslint)

JSLint was the original JS code-quality tool. It was usurped by [unhappy developers in 2011](http://badassjs.com/post/3364925033/jshint-an-community-driven-fork-of-jslint) because of it's rigid choices as to *how* it determines that JS should be written. They created JSHint.
Then in '13 [ESLint came around](http://www.nczonline.net/blog/2013/07/16/introducing-eslint/) due to a desire to make rules pluggable and generally have a more versatile and customizable tool.

### Choice: [ESLint](https://github.com/eslint/eslint)

#### Features
* Create custom linting rules
* No preconceived rules - we can create exactly what we want
* Configuration easily included in app
* Rules can be pluggable
	* Each rule can exist in its own file ([discussed here](http://ncona.com/2014/05/using-eslint-to-enforce-js-coding-conventions/))
	* NBCUOts could create a rule repository

---
<a id="css-linting"></a>
## CSS Linting

### Task Requirements
* basic syntax checking
* test for patterns
* test for inefficiencies

### Choice: [CSSLint](https://github.com/CSSLint/csslint)

Right now, CSSLint is really the only tool out there. Luckily, it's a good one.

#### Features
* Rules are pluggable
* Large user community
* [Excellent documentation and source-able rules](https://github.com/CSSLint/csslint/wiki/Rules)
* [Comcast-created Compass rule](https://github.com/Comcast/compass-csscss)

---
<a id="unit-testing"></a>
## Unit Testing

---
<a id="e2e-testing"></a>
## End-2-End Testing

---

# Distribution creation

---
<a id="build-cleaning"></a>
## Build Cleaning
Every time a build is created, we need to wipe out all the files that were created before and give the system a clean start.

## Choice: [gulp-rimraf](https://github.com/robrich/gulp-rimraf)


---
<a id="image-minification"></a>
## Image minification
### Task Requirements
* Optimize and Minify all images
* Must include .gif, .jpg, .png and .svg

## Choice: [imagemin](https://github.com/imagemin/imagemin)

### Features
* [Works with Gulp](https://github.com/sindresorhus/gulp-imagemin)
* Converts all image types
* Optimization levels
* Plugins for image types


---
<a id="file-concat"></a>
## File Concatenation

We need to combine multiple files into single files to cut down on server calls. This is going to require different tasks for concatting each different section of files - our bower components, separate javascripts, and css files.

### Options
* [gulp-concat-util](https://github.com/mgcrea/gulp-concat-util)
* [gulp-concat](http://github.com/wearefractal/gulp-concat)
* [gulp-useref](https://github.com/jonkemp/gulp-useref)

### Choice: *requires more research*


---
<a id="js-prod"></a>
## Javascript Production Conversion

Tasks needed to complete:
* concatenate bower (third-party) scripts into one
* minify bower scripts
* concatenate app scripts into one
* minify app scripts
* save new versions to production build/distribution folder

## Options for minification
* [uglifyjs2](https://github.com/mishoo/UglifyJS2)
    * [gulp-uglify](https://github.com/terinjokes/gulp-uglify) is the gulp version of uglifyjs2
    * [gulp-uglifyjs](https://github.com/craigjennings11/gulp-uglifyjs)

The main difference between gulp-uglify and gulp-uglifyjs is that the latter can glob files or pull in an array of files. Nice feature, but that can be handled by other scripts. Removing that extra code makes the former (gulp-uglify) a better choice as the developer is more active and its version of uglifyjs2 is more up-to-date with the latest version.

## Choice: [gulp-uglify](https://github.com/terinjokes/gulp-uglify)

## Processing files

We're going to set up some different functionality for if we're dealing with third-party scripts (like from Bower) or our own scripts.

### Process for Bower Files

1. Find all bower files and their dependencies
    * [gulp-filter](https://github.com/sindresorhus/gulp-filter) uses globbing to find all files of the type we need
    * [main-bower-files](https://github.com/ck86/main-bower-files) helps gulp narrow this to only the bower components we need
2. Concat and uglify js files
3. Concat css, and other assets into build/bower folder

### Process for App Scripts
1. We create a glob list to point to just our app's script files
    * ignores bower files
    * ignores test files (for now)
    * points to all other folders in /app
    * directly points to app.js

---
<a id="css-mini"></a>
## CSS Minification &&
<a id="css-optimization"></a>
## CSS Optimization
* [gulp-concat-css](https://github.com/mariocasciaro/gulp-concat-css)
* [gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css)

---
<a id="html-optimization"></a>
## HTML Optimization

## Options
* [gulp-minify-html](https://github.com/jonathanepollack/gulp-minify-html)
--- 

---
<a id="revisioning"></a>
## Cache buster/Revision
* add hash to url for static asset revisioning

---
<a id="html-convert"></a>
## HTML->JS-Module Conversion
* converts HTML files to Javascript and puts in cache to cut back on html file loading
* This may belong under “during dev”

---
<a id="font-convert"></a>
## Convert fonts/icon fonts/small images to base64 and put in css
* reduces calls to the server

---
<a id="inspiration"></a>
# Open Source tech that provided SO MUCH help to come up with this system
* [Generator Boom]
---
<a id="general"></a>
# General
* Don’t re-process un-changed files
* Stop gulp crashing on errors (Plumber)
