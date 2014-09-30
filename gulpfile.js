'use strict';
var gulp = require('gulp');
require('require-dir')('./gulp');

var bowerConfig = {
  paths: {
    bowerDirectory: SETTINGS.src.bower,
    bowerrc: '.bowerrc',
    bowerJson: 'bower.json'
  }
};

gulp.task('help', $.taskListing);

gulp.task('dgeni', function() {
  var dgeni = new $.dgeni([require('./docs/dgeni-docs')]);
  return dgeni.generate().then(function(docs) {
      console.log(docs.length, 'docs generated');
    });
});
/*============================================================
=                             CONCAT                          =
============================================================*/
// gulp.task('concat', ['concat:bower']);

// gulp.task('concat:bower', ['clean:bower'], function () {
//   console.log('-------------------------------------------------- CONCAT :bower');

//   // this section uses 'gulp-filter' to find all files of these types:
//   var jsFilter = $.filter('**/*.js'),
//     cssFilter = $.filter('**/*.css'),
//     assetsFilter = $.filter(['!**/*.js', '!**/*.css', '!**/*.scss']);

//   console.log('-------------------------------------------------- bower script files:');
//   console.log(bowerFiles(bowerConfig));

//   var stream = gulp.src(bowerFiles(bowerConfig), {base: SETTINGS.src.bower}) // narrowed to just bower-files

//     .pipe(jsFilter)
//     .pipe($.concat('_bower.js'))
//     .pipe($.uglify())
//     //.pipe($.if(isProduction, $.uglify()))
//     .pipe(gulp.dest(SETTINGS.build.bower))
//     .pipe(jsFilter.restore())
//     .pipe(cssFilter)
//     .pipe($.sass())
//     .pipe(map(function (file, callback) {
//       var relativePath = path.dirname(path.relative(path.resolve(SETTINGS.src.bower), file.path));
//       // CSS path resolving
//       // Taken from https://github.com/enyojs/enyo/blob/master/tools/minifier/minify.js
//       var contents = file.contents.toString().replace(/url\([^)]*\)/g, function (match) {
//         // find the url path, ignore quotes in url string
//         var matches = /url\s*\(\s*(('([^']*)')|("([^"]*)")|([^'"]*))\s*\)/.exec(match),
//           url = matches[3] || matches[5] || matches[6];

//         // Don't modify data and http(s) urls
//         if (/^data:/.test(url) || /^http(:?s)?:/.test(url)) {
//           return 'url(' + url + ')';
//         }
//         return 'url(' + path.join(path.relative(SETTINGS.build.bower, SETTINGS.build.app), SETTINGS.build.bower, relativePath, url) + ')';
//       });
//       file.contents = new Buffer(contents);

//       callback(null, file);
//     }))
//     .pipe($.concat('_bower.css'))
//     .pipe(gulp.dest(SETTINGS.build.bower))
//     .pipe(cssFilter.restore())
//     .pipe(assetsFilter)
//     .pipe(gulp.dest(SETTINGS.build.bower))
//     .pipe(assetsFilter.restore());
//   return stream;
// });


// //gulp.task('build', ['clean', 'concat']);

gulp.task('default', ['serve']);

