'use strict';
var gulp = require('gulp');
require('require-dir')('./gulp');


gulp.task('help', $.taskListing);


gulp.task('default', ['serve']);

