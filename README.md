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
* Full distribution creation

## Requirements

### You will need to install these
* [Ruby](http://www.ruby-lang.org/en/downloads/)
* [compass/sass](http://compass-style.org/install/) globally installed
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

## Questions/Concerns I have
1. I see people using a "partials" folder for templates, sometimes for pages. Does that belong in this structure?
2. Is there a way to compile Compass/SASS using Node instead of Ruby?

## Running to do (not in order)
1. Document details on why Angular was chosen in [Tech Solutions for FE](architecture-needs-and-solutions.md)
2. research:
    * [gulp-util](https://github.com/gulpjs/gulp-util)
    * [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins)
        * [gulp example](http://andy-carter.com/blog/automatically-load-gulp-plugins-with-gulp-load-plugins)
3. ~~CSS Linting~~
4. Unit Testing
5. E2E Testing
6. Distribution build system
    1. ~~Dist cleaning~~
    2. Image Minification
    3. ~~JS Prod Deploy~~
    5. ~~CSS Minification~~
    6. File revisioning
    7. Font conversion/Icon conversion
    8. General speed improvements
7. Compass doesn't seem to be compiling correctly
    * multiple styles for same element are in separate elements in file
8. Consistent gulp messaging
9. Consistent in-file notes
10. Should the DEV app run off of the build? Its own build?
11. Add gulp [plumber](https://github.com/floatdrop/gulp-plumber) so we don't crash on errors
    * [simple-and-awesome-gulp-setup](http://www.kycosoftware.com/blog/article/simple-and-awesome-gulp-setup)
    * [how-to-basic-tasks-in-gulp-js](http://ilikekillnerds.com/2014/07/how-to-basic-tasks-in-gulp-js/)
    * [how-to-handle-gulp-watch-errors-with-plumber](http://cameronspear.com/blog/how-to-handle-gulp-watch-errors-with-plumber)
12. research [gulp-task-listing](https://www.npmjs.org/package/gulp-task-listing)
13. Error sounds/messages
14. BUG: gulp 'serve' needs to be written better, getting an eslint error
15. Can I get compass to auto-include all .scss files without adding them to the main (styles.scss)? 
    * this means just adding a component would auto-add the scss file to an import for main styles

## Bugs that were fixed, and how
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

## Lofty Goals
* Pull in complete angular components via Package Manager
    * first test component will be the Object Viewer
* Pull in html patterns via Package Manager and create directives from them
* Choice for pulled-in items
    * Use as is, allowing fresh pull-requests
    * Add to system as editable code
