'use strict';
var gulp = require('gulp');


/*********************************************
Uses dgeni to create markdown files from in-file doc-blocks
*/
gulp.task('dgeni', ['docs:clean:partials'], function() {
  var dgeni = new $.dgeni([require('../docs/dgeni-docs')]);
  return dgeni.generate().then(function(docs) {
    console.log(docs.length, 'docs generated');
  });
});

/*********************************************
Cleans out the docs/partials folder
*/
var cleanFiles = function (files, logMessage) {
  console.log('-------------------------------------------------- CLEAN :' + logMessage);
  return gulp.src(files, {read: false}).pipe($.rimraf({force: true}));
};
gulp.task('docs:clean:partials', function () {
  return cleanFiles([SETTINGS.src.docs], 'all files');
});

/*********************************************
Creates a single file containing all dgeni-made file docs
*/
gulp.task('docs:singleFile', ['dgeni'], function(){
  console.log('-------------------------------------------------- CREATE SINGLE DOC FILE');
  gulp.src('docs/partials/api/**/*.html')
  .pipe($.concat('api.md'))
  .pipe(gulp.dest('./docs/'));
});
