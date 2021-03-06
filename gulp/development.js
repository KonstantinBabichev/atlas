'use strict';
var gulp = require('gulp');
var dirs = require('compass-options').dirs();

/*********************************************
Javascript Globbing/Indexing
*/
gulp.task('dev:js:globbing', function () {
  console.log('-------------------------------------------------- DEVELOPMENT: Javascript Globbing');
  var target = gulp.src(SETTINGS.src.htmlMain);
  var sources = gulp.src(SETTINGS.src.scriptsGlobbing, {read: false});

  return target.pipe($.inject(sources,{relative: true}))
    .pipe(gulp.dest(SETTINGS.src.app))
    .pipe(reload({stream:true}));
});

/*********************************************
CSS .css GLOBBING
*/
gulp.task('dev:css:globbing', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: SCSS Globbing');

  return gulp.src(SETTINGS.src.css + 'styles.scss')
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
gulp.task('dev:compass', ['dev:css:globbing', 'dev:scsslint'], function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion');

  return gulp.src(SETTINGS.src.styles)
    .pipe($.compass({
      config_file: 'config.rb',
      css: 'app/styles',
      sass: 'app/styles',
      bundle_exec: true
    }))
    .on('error', function(err) {
      // Nath: compass errors happen multiple times - need to controll this
    })
    .pipe(gulp.dest(SETTINGS.src.app))
    .pipe(reload({stream:true}));
});

/*********************************************
ESLint Javascript Linting
NATH Todo: eslint should only be checking CHANGED files
NATH Todo: SETTINGS.src.scripts contains templates.js/throws error
*/
gulp.task('dev:eslint', function () {
  console.log('-------------------------------------------------- DEVELOPMENT: ESLint Javascript Linting');
  return gulp.src(SETTINGS.src.scripts)
    .pipe($.cached('dev-eslint'))
    .pipe($.eslint('.eslintrc'))
    .pipe($.eslint.format())
    .pipe(reload({stream:true}));
});

/*********************************************
CSSLint CSS Linting
*/
gulp.task('dev:csslint', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: CSSLint CSS Linting');
  return gulp.src(SETTINGS.src.cssMain)
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
    .pipe($.cached('dev-scsslint'))
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

  return gulp.src(SETTINGS.src.html)
    .pipe($.cached('dev-html-convert'))
    .pipe($.angularTemplatecache({ module:'templatescache', standalone:true }))
    .pipe(gulp.dest(SETTINGS.src.scriptFolder));
});

/*********************************************
WATCH Tasks specific to development
*/
gulp.task('dev:watch', function(){
  gulp.watch(SETTINGS.src.styles, ['dev:compass','dev:csslint']);
  gulp.watch(SETTINGS.src.html, ['dev:html:convert']);
  gulp.watch(SETTINGS.src.scripts, ['dev:js:globbing','dev:eslint']);
});

/*********************************************
DEVELOPMENT Master Task
*/
gulp.task('development', ['wiredep','dev:js:globbing', 'dev:compass', 'dev:eslint', 'dev:csslint', 'dev:html:convert']);


