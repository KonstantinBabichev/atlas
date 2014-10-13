'use strict';
var gulp = require('gulp');

/*********************************************
Global settings override
* either override individual settings or the entire object
*/
global.SETTINGS.src.docs = 'some/where/else';

/*********************************************
Test
*/
gulp.task('example:app-gulp', function() {
  console.log('testering');
  console.log(SETTINGS.src.docs);
});
