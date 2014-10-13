'use strict';
var gulp = require('gulp');

gulp.task('build:themes:styles:bravo', [], function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion. Bravo Theme');

  return gulp.src( SETTINGS.src.themes.bravo + '*.scss')
    .pipe($.compass({
      css: SETTINGS.build.brands.bravo,
      sass: SETTINGS.src.themes.bravo,
      'bundle_exec': true,
      style : 'compressed'
    }))
    .pipe($.print())
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(gulp.dest( SETTINGS.build.brands.bravo));
});

gulp.task('build:themes:styles:oxygen', [], function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion. Oxygen Theme');

  return gulp.src( SETTINGS.src.themes.oxygen + '*.scss')
    .pipe($.compass({
      css: SETTINGS.build.brands.oxygen,
      sass: SETTINGS.src.themes.oxygen,
      'bundle_exec': true,
      style : 'compressed'
    }))
    .pipe($.print())
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(gulp.dest( SETTINGS.build.brands.oxygen));
});


gulp.task('build:themes:styles:syfy', [], function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion. Syfy Theme');

  return gulp.src(SETTINGS.src.themes.syfy + '*.scss')
    .pipe($.compass({
      css: SETTINGS.build.brands.syfy,
      sass: SETTINGS.src.themes.syfy,
      'bundle_exec': true,
      style : 'compressed'
    }))
    .pipe($.print())
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(gulp.dest(SETTINGS.build.brands.syfy));
});


/**
 * compiles app/styles/themes/bravo/styles.scss to /build/themes/bravo/styles.css
 */
gulp.task('build:themes:styles', [
  'build:themes:styles:bravo',
  'build:themes:styles:oxygen',
  'build:themes:styles:syfy'
]);

gulp.task('build:themes', [
  'build:themes:styles'
  //other tasks: build:themes:js, build:themes:img, for example
]);

/**
 * main custom task - triggers all custom tasks
 */
gulp.task('custom', ['build:themes']);