'use strict';
var gulp = require('gulp');
var path = require('path');

require('require-dir')('./gulp');



gulp.task('help', $.taskListing);



gulp.task('default', ['serve']);

