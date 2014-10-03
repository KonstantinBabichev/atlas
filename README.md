Atlas
=====


## What is this?
**A Proposed Angular Application Architecture**

I need a fully-functional angular development environment for my job. I'm coming up with the best overall structure, using the current best-practices, and following the specific needs of my company.

### What are those needs?
They are long and varied. For full details, please see this document:
[architecture-needs-and-solutions.md](architecture-needs-and-solutions.md)

#### Short version:
* Uses Gulp as a taskrunner
* Compass/SASS compilation (we do not use LESS)
* Dev environment with server/browser sync, linting, testing
* [Google's file/folder structure](https://docs.google.com/a/scottnath.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)
* Full distribution/build creation

---
## Requirements

### Must be *globally* installed
* [Ruby](http://www.ruby-lang.org/en/downloads/)
* [compass/sass](http://compass-style.org/install/)
* [scss-lint](https://github.com/causes/scss-lint#installation)
* [node.js](http://nodejs.org)

### Node-Installed items:
* [bower](http://bower.io/) 
	* ```npm install -g bower```
* [gulp](http://gulpjs.com/)
	* ```npm install --g gulp```

---

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

## File Documentation
The system creates a single markdown file compiling all the ngdocs from each /app js file.

[api.md files documentation](https://github.com/scottnath/atlas/blob/master/docs/api.md)

---

## Example Code
I have added multiple files with directives, controllers, etc into the /app folder. The point of this is to know exactly what the files that the Yeoman generator will be building out will look like. 

* [Publisher example code](publisher.md)
* [General example code](example-code-explained.md)

---

## Questions/Concerns/Bugs I have/Things to Add to system

Items marked with **(MVP)** are considered **Minimum-Viable-Product** requirements.

### Gulp specific
1. Move config files into /gulp/configs
8. Consistent gulp messaging
11. Add gulp [plumber](https://github.com/floatdrop/gulp-plumber) so we don't crash on errors
    * [simple-and-awesome-gulp-setup](http://www.kycosoftware.com/blog/article/simple-and-awesome-gulp-setup)
    * [how-to-basic-tasks-in-gulp-js](http://ilikekillnerds.com/2014/07/how-to-basic-tasks-in-gulp-js/)
    * [how-to-handle-gulp-watch-errors-with-plumber](http://cameronspear.com/blog/how-to-handle-gulp-watch-errors-with-plumber)
    * NOTE: crashing on errors is fixed in gulp 4.0, eta tbd
13. Error sounds/messages
14. **(MVP)** How to install compass plugins like singularity + breakpoint
15. **(MVP)** /app/**.js globbing into /app/index.html

### Compass/css specific
1. Is there a way to compile Compass/SASS using Node instead of Ruby?
15. COMPASS: Can I get compass to auto-include all .scss files without adding them to the main (styles.scss)? 
    * **works now!**
    * TODO: perform this update *only* when there is a *NEW* or *REMOVED* .scss file

### NORTH scss structure
1. need to add NORTH css file structure
	* will require upgrade to css globbing to ignore north-required import files (_mixins,_variables,_extensions) or accept wildcards for subfolders
2. [North folder structure examples](https://github.com/north/north/tree/master/examples/sass/partials)

### Bower specific
16. **(MVP)** bower file handling and conversion/minification not complete
19. **(MVP)** Bower files minification creates bugs

### TESTING
* **(MVP)** Unit Testing
* **(MVP)** E2E Testing

### General Items
* auto-save /build to branch:gh-pages
	* basic functionality in place via [gulp-gh-pages](https://github.com/rowoot/gulp-gh-pages)
	* add: /docs
	* add: section in ARCHitecture document
* DOCS: need to create a docs app
	* copy functionality from angular.js/docs
	* already have dgeni doc creator working
* **(MVP)** need to set up browsersync to use IP for multi-devices
* **(MVP)** watch all html templates and auto-add to templates.js
	* watch does not see new files or folders
	* watch is not picking up new files! gulp-watch should be fixing this issue...it is not (test code in dev:html:convert)
* check only newly-changed files https://github.com/juanfran/gulp-scss-lint#lint-only-modified-files, https://github.com/wearefractal/gulp-cached
* **(MVP)** In-code notes should use ngdocs syntax
	* create docs with [https://github.com/angular/dgeni](https://github.com/angular/dgeni)
* **(MVP)** Pull in complete angular components via Package Manager
    * first test component will be the Object Viewer
    * need to figure out how to construct the components to match system
    * https://github.com/angular/material
	* Choice for pulled-in items
	    * Use as is, allowing fresh pull-requests
	    * Add to system as editable code
* Pull in html patterns via Package Manager and create directives from them    
* different/mutiple REST options
	* publisher/drupal
	* firebase
		* basic setup YOURFIREBASEACCT/YOURFIREBASEPASS/YOURFIREBASEDB
		* inlcude object-viewer
	* wordpress
	* browser storage
* Contributors section
* stackoverflow Q: what is use-case for "view" stand-alone template

### Publisher
4. gallery: borealis + transform
	* For publisher gallery, research/find mostly-css-transform-based gallery
5. incorporate proper gallery HTML
6. remove unnecessary code/files
* For publisher shows, follow [erin's guidelines](https://github.com/NBCUOTS/pavo/issues/63#issuecomment-56210523) and a more generic system
	* this follows to how we can use the component library!

### To be Researched
* UI-Route vs Angular Route

### Presentations
* Bill E requested diagrams
	* what are the artifacts that the developer is authoring and checking into source control?




---


## Major Bugs that were fixed, and how
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
	
