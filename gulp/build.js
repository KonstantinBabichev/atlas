'use strict';
var gulp = require('gulp');

/*********************************************
CLEAN Build folder and sub-parts
*/
var cleanFiles = function (files, logMessage) {
  console.log('-------------------------------------------------- CLEAN :' + logMessage);
  return gulp.src(files, {read: false}).pipe($.rimraf({force: true}));
};

gulp.task('build:clean', function () {
  return cleanFiles([SETTINGS.build.app], 'all files');
});

gulp.task('build:clean:css', function () {
  return cleanFiles([SETTINGS.build.css], 'css');
});

gulp.task('build:clean:bower', function () {
  return cleanFiles([SETTINGS.build.bower], 'bower');
});

gulp.task('build:clean:js', function () {
  return cleanFiles([SETTINGS.build.js], 'js');
});

gulp.task('build:clean:html', function () {
  return cleanFiles([SETTINGS.build.htmlMain], 'html');
});

/*TBA:*/
// gulp.task('clean:images', function () {
//   cleanFiles([SETTINGS.build.images], 'images');
// });

// gulp.task('clean:fonts', function () {
//   cleanFiles([SETTINGS.build.fonts + '*.*', SETTINGS.build.fonts + '**/*.*'], 'fonts');
// });

// gulp.task('clean:zip', function () {
//   cleanFiles(['zip/**/*', '!zip/build-*.zip'], 'zip');
// });


/*********************************************
BUILD: Production-Ready Version of system
NATH: to do
* .filters should be pulling files from SETTINGS
* need to figure out how to get .min versions of bower files OR how to minimize them ourselves without error

*/
gulp.task('build', ['build:clean', 'development'], function(){

  var jsFilter = $.filter('**/all-*.js'); // our scripts
  var bowerFilter = $.filter('**/bower-*.js'); // our scripts
  var cssFilter = $.filter('**/*.css'); // our css

  console.log('-------------------------------------------------- BUILD: Production-Ready ');
  var assets = $.useref.assets();
  return gulp.src(SETTINGS.src.htmlMain)
    .pipe(assets)
    .pipe($.rev())

    // START: Process User-Created (non-bower) javascript files
    .pipe(jsFilter)
    .pipe($.print())
    .pipe($.ngAnnotate()) // required to stop minfication from breaking scripts
    .pipe($.uglify()) // Uglify2, our minification choice for javascripts
    .pipe(jsFilter.restore())
    // END: Process User-Created (non-bower) javascript files

    // START: Process Bower javascript files
    .pipe(bowerFilter)
    .pipe($.print())
    .pipe($.uglify()) // Uglify2, our minification choice for javascripts
    .pipe(bowerFilter.restore())
    // END: Process Bower javascript files

    .pipe(cssFilter)
    .pipe($.print())
    .pipe($.minifyCss({keepSpecialComments: '*'}))
    .pipe(cssFilter.restore())

    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(gulp.dest(SETTINGS.build.app));

});
