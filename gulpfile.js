'use strict';
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');

require('require-dir')('./gulp');

/*********************************************
Application-based gulp tasks and overrides
*/
var appGulpDir = './app/_gulp';
try {
 // a path we KNOW is totally bogus and not a module
 require('require-dir')(appGulpDir);
}
catch (e) {
 console.log('Gulp app directory does not exist')
 console.log(e)
}



gulp.task('help', $.taskListing);



gulp.task('default', ['serve']);

