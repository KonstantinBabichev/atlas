'use strict';
var gulp = require('gulp');

/**
 * main task - triggers all theme compiling
 */
gulp.task('dev:compass:themes', ['dev:compass:bravo', 'dev:compass:oxygen', 'dev:compass:syfy']);


/**
 * compiles /themes/bravo/styles.scss to /build/themes/bravo/styles.css
 */
gulp.task('dev:compass:bravo', [], function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion. Bravo Theme');

  return gulp.src(SETTINGS.src.themes.bravo+'*.scss')
    .pipe($.compass({
      css: SETTINGS.build.brands.bravo,
      sass: SETTINGS.src.themes.bravo,
      bundle_exec: true,
      style : 'compressed'
    }))
    .pipe($.print())
    .on('error', function(err) {})
    .pipe(gulp.dest(SETTINGS.build.brands.bravo));
});

gulp.task('dev:compass:oxygen', [], function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion. Oxygen Theme');

  return gulp.src(SETTINGS.src.themes.oxygen+'*.scss')
    .pipe($.compass({
      css: SETTINGS.build.brands.oxygen,
      sass: SETTINGS.src.themes.oxygen,
      bundle_exec: true,
      style : 'compressed'
    }))
    .pipe($.print())
    .on('error', function(err) {})
    .pipe(gulp.dest(SETTINGS.build.brands.oxygen));
});


gulp.task('dev:compass:syfy', [], function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion. Syfy Theme');

  return gulp.src(SETTINGS.src.themes.syfy+'*.scss')
    .pipe($.compass({
      css: SETTINGS.build.brands.syfy,
      sass: SETTINGS.src.themes.syfy,
      bundle_exec: true,
      style : 'compressed'
    }))
    .pipe($.print())
    .on('error', function(err) {})
    .pipe(gulp.dest(SETTINGS.build.brands.syfy));
});
