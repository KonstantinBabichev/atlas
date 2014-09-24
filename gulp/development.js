'use strict';
var gulp = require('gulp');

/*********************************************
SCSS .scss GLOBBING
*/
gulp.task('dev:scss:globbing', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: SCSS Globbing');

  return gulp.src(SETTINGS.src.css + 'styles.scss')
    .pipe($.print())
    .pipe($.cssGlobbing({
      extensions: ['.css', '.scss'],
      ignoreFolders: ['../styles'],
      autoReplaceBlock: {
        onOff: true,
        globBlockBegin: 'cssGlobbingBegin',
        globBlockEnd: 'cssGlobbingEnd',
        globBlockContents: '../**/*.scss'
      }
    }))
    .pipe(gulp.dest(SETTINGS.src.css));
});

/*********************************************
Compass compilation
*/
gulp.task('dev:compass', ['dev:scss:globbing', 'dev:scsslint'], function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion');

  return gulp.src(SETTINGS.src.styles)
    .pipe($.compass({
      css: 'app/styles',
      sass: 'app/styles',
      comments: false,
      style: 'nested',
      logging: true
    }))
    .pipe($.print())
    .on('error', function(err) {
      // Nath: compass errors happen multiple times - need to controll this
    })
    .pipe(gulp.dest(SETTINGS.src.app))
    .pipe(reload({stream:true}));
});

/*********************************************
ESLint Javascript Linting
*/
gulp.task('dev:eslint', function () {
  console.log('-------------------------------------------------- DEVELOPMENT: ESLint Javascript Linting');
  return gulp.src(SETTINGS.src.scripts)
    .pipe($.print())
    .pipe($.eslint('.eslintrc'))
    .pipe($.eslint.format())
    .pipe(reload({stream:true}));
});

// NATH: this eslint existed due to the errors on watch that happened before. if we can get this working without the errors, remove gulp-watch from package.json
// gulp.task('eslint', function () {
//   console.log('-------------------------------------------------- DEVELOPMENT: ESLint Javascript Linting');
//   gulp.src(SETTINGS.src.scripts)
//     .pipe($.watch(function(files) {
//       return files.pipe($.eslint())
//         .pipe($.eslint.format());
//     }));
// });

/*********************************************
CSSLint CSS Linting
*/
gulp.task('dev:csslint', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: CSSLint CSS Linting');
  return gulp.src(SETTINGS.src.css + '/styles.css')
    .pipe($.print())
    .pipe($.csslint('.csslintrc'))
    .pipe($.csslint.reporter())
    .pipe(reload({stream:true}));
});

/*********************************************
SCSSLint SCSS Linting
*/
gulp.task('dev:scsslint', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: SCSSLint SCSS Linting');
  return gulp.src(SETTINGS.src.styles)
    .pipe($.scssLint({
      'config': 'scsslintrc.yml'
    }))
    .pipe(reload({stream:true}));
});

/*********************************************
HTML Templates Conversion to Angular Javascript Templates
*/
gulp.task('dev:html:convert', function(){
  console.log('-------------------------------------------------- DEVELOPMENT: HTML->AngularJS templatescache');

  // test code for gulp-watch
  // return gulp.src(SETTINGS.src.html)
  //   .pipe($.watch(function(files) {
  //     return files.pipe($.angularTemplatecache({ module:'templatescache', standalone:true }))
  //     .pipe(gulp.dest(SETTINGS.src.scriptFolder));
  //   }));
  return gulp.src(SETTINGS.src.html)
    .pipe($.angularTemplatecache({ module:'templatescache', standalone:true }))
    .pipe(gulp.dest(SETTINGS.src.scriptFolder));
});

/*********************************************
WATCH Tasks specific to development
*/
gulp.task('dev:watch', function(){
  gulp.watch(SETTINGS.src.styles, ['dev:compass']);
  gulp.watch(SETTINGS.src.html, ['dev:html:convert']);
  gulp.watch(SETTINGS.src.css, ['dev:csslint']);
  gulp.watch(SETTINGS.src.scripts, ['dev:eslint']);
});

/*********************************************
DEVELOPMENT Master Task
*/
gulp.task('development', ['wiredep','dev:compass', 'dev:eslint', 'dev:csslint', 'dev:html:convert']);


