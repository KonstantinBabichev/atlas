# Architecture Needs and Solutions for the Atlas Application

---

## Javascript Framework

### Options
* [EmberJS]
* [Backbone]
* [AngularJS]

---

## Taskrunner
The taskrunner keeps all the pieces of our application running as well as a system to receive commands that run on demand.

### Choice: [Gulp](http://gulpjs.com)

Research and [testing](https://github.com/scottnath/gulp-vs-grunt) had Gulp beat out [Grunt](http://gruntjs.com), proving to be 5 times faster at running tasks.

### Gulp Plugins to research:
* [gulp-util](https://github.com/gulpjs/gulp-util)
* [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins)

---

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

## Unit Testing

---

## End-2-End Testing

---

# Distribution creation

---

## Build Cleaning
Every time a build is created, we need to wipe out all the files that were created before and give the system a clean start.

## Choice: [gulp-rimraf](https://github.com/robrich/gulp-rimraf)


---

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

## File Concatenation

We need to combine multiple files into single files to cut down on server calls.

### Options
* [gulp-concat-util](https://github.com/mgcrea/gulp-concat-util)
* [gulp-concat](http://github.com/wearefractal/gulp-concat)
* [gulp-useref](https://github.com/jonkemp/gulp-useref)

### Choice: *requires more research*


---

## Javascript minification

---

## CSS Optimization
* [gulp-concat-css](https://github.com/mariocasciaro/gulp-concat-css)

--- 

## CSS Minification

---

## Cache buster/Revision
* add hash to url for static asset revisioning

---

## HTML->JS-Module Conversion
* converts HTML files to Javascript and puts in cache to cut back on html file loading
* This may belong under “during dev”

---

## Convert fonts/icon fonts/small images to base64 and put in css
* reduces calls to the server

---
# General
* Don’t re-process un-changed files

