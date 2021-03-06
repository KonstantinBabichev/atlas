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
* [bundler](http://bundler.io/#getting-started)

### Node-Installed items:
* [bower](http://bower.io/) 
	* ```npm install -g bower```
* [gulp](http://gulpjs.com/)
	* ```npm install --g gulp```

---

## Installation

First, download this repo and ```cd``` into its directory

### Install Bower/Bundler/Node Components in repo
```npm install```

### Start Server

```gulp ```

---

## Useful Gulp Tasks

* ```gulp```
	* runs all *development* tasks and starts a dev server
* ```gulp help```
	* lists all available gulp tasks
* ```gulp build```
	* builds the distribution version of your app
* ```gulp deploy:ghPages```
	* deploys the build folder to gh-pages branch, pushes to github
* ```gulp serve:build```
	* starts a server using the /build folder

---
## Viewing Live Changes
Gulp creates a webserver using [Browser Sync](http://browsersync.io), which creates two URLs - localhost and an IP. You can view changes live in **any device** that is on the same local network as your machine by using that IP address. The IP address will be printed in your terminal/console window after you first run ```gulp``` to start the server. 

**Example:**

```
...
[11:28:24] Finished 'default' after 8.29 μs
[BS] Local URL: http://localhost:8001
[BS] External URL: http://192.168.3.101:8001
[BS] Serving files from: app
Started connect web server on localhost:8001
```

---

## What happens next
After feedback, I will make a Yeoman Generator of the final app system


---

## File Documentation
The system creates a single markdown file compiling all the ngdocs from each /app js file.

* [api.md files documentation](https://github.com/scottnath/atlas/blob/master/docs/api.md)

---

## Example Code
I have added multiple files with directives, controllers, etc into the /app folder. The point of this is to know exactly what the files that the Yeoman generator will be building out will look like. 

* [Publisher example code](docs/publisher.md)
* [General example code](docs/example-code-explained.md)

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

### Compass/css specific
1. Is there a way to compile Compass/SASS using Node instead of Ruby?

### NORTH scss structure
1. need to add NORTH css file structure
	* will require upgrade to css globbing to ignore north-required import files (_mixins,_variables,_extensions) or accept wildcards for subfolders
2. [North folder structure examples](https://github.com/north/north/tree/master/examples/sass/partials)

### TESTING
* **(MVP)** Unit Testing
* **(MVP)** E2E Testing

### General Items
* auto-save /build to branch:gh-pages
	* basic functionality in place via [gulp-gh-pages](https://github.com/rowoot/gulp-gh-pages)
	* add: /docs
	* add: section in ARCHitecture document
* DOCS: need to create a docs app
	* already have dgeni doc creator working
	* styling: https://github.com/angular/material
* **(MVP)** More detail in ngdocs
* **(MVP)** ngdocs-writing instructions
* **(MVP)** Pull in complete angular components via Package Manager
    * ~~first test component will be the Object Viewer~~ done!
    * need to document how to construct the components to match system
	* Choice for pulled-in items
	    * Use as is, allowing fresh pull-requests
	    * Add to system as editable code
	* ability to pull from private repository
* Pull in html patterns via Package Manager and create directives from them    
* different/mutiple REST options
	* publisher/drupal
		* could this be pulled in, with a config for site variables??
	* firebase
		* basic setup YOURFIREBASEACCT/YOURFIREBASEPASS/YOURFIREBASEDB
		* inlcude object-viewer
	* wordpress
	* browser storage
* Contributors section
* stackoverflow Q: what is use-case for "view" stand-alone template
* rimraf deprecated
	* npm WARN deprecated gulp-rimraf@0.1.1: Use npmjs.org/del instead, see https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

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
	
