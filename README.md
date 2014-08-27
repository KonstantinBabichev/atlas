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

* Ruby
* bower
* node.js

## Installation

### Install Bower/Node Components
```bower install && npm install```

### Start Server
```gulp```

## What happens next
After feedback, I will make a Yeoman Generator of the final app systems

## Questions/Concerns I have
1. I see people using a "partials" folder for templates, sometimes for pages. Does that belong in this structure?
2. Is there a way to compile Compass/SASS using Node instead of Ruby?
3. I have put computed styles into /styles. This does not seem ideal as it doesn't follow the folder structure.


## Bugs
1. I wanted to have the styles.scss file live in the main folder, but it caused errors
    * to do: decide .scss final locations (this isn't talked about in Google's structure doc)
    * can finding sub-folder's .scss be done dynamically?
2. When trying to gulp-watch eslint I'm getting ```Error: EMFILE, too many open files```
    * ulimit didn't help
    * followed instructions here: http://unix.stackexchange.com/questions/108174/how-to-persist-ulimit-settings-in-osx-mavericks
        * worked, but showed new errors: 2014-08-27 17:08 gulp[581] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)

## Lofty Goals
* Pull in full-angular components via Package Manager
* Pull in html patterns via Package Manager and create directives from them
* Choice for pulled-in items
    * Use as is, allowing fresh pull-requests
    * Add to system as editable code
