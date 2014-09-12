'use strict';

/*********************************************
COMPASS .scss COMPILATION
*/
gulp.task('compass', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion');

  return gulp.src(SETTINGS.src.styles)
  .pipe($.compass({
    css: 'app/styles',
    sass: 'app/styles',
    comments: false,
    style: 'nested'
  }))
  .on('error', function(err) {
    // Nath: compass errors happen multiple times - need to controll this
  })
  .pipe(gulp.dest(SETTINGS.src.css))
  .pipe(reload({stream:true}));
});
/*********************************************
ESLint Javascript Linting
*/

gulp.task('eslint', function () {
  console.log('-------------------------------------------------- DEVELOPMENT: ESLint Javascript Linting');
  return gulp.src(SETTINGS.src.scripts)
    .pipe($.print())
    .pipe($.eslint('.eslintrc'))
    .pipe($.eslint.format());
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
gulp.task('csslint', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: CSSLint CSS Linting');
  return gulp.src(SETTINGS.src.css + '/styles.css')
    .pipe($.print())
    .pipe($.csslint('.csslintrc'))
    .pipe($.csslint.reporter());
});

/*********************************************
HTML Templates Conversion to Angular Javascript Templates
*/
gulp.task('html:convert', function(){
  console.log('-------------------------------------------------- DEVELOPMENT: HTML->AngularJS templatescache');
  return gulp.src(SETTINGS.src.html)
    .pipe($.angularTemplatecache({ module:'templatescache', standalone:true }))
    .pipe(gulp.dest(SETTINGS.src.scriptFolder));
});

/*********************************************
WATCH Tasks specific to development
*/
gulp.task('watch:development', function(){
  gulp.watch(SETTINGS.src.styles, ['compass']);
  gulp.watch(SETTINGS.src.html, ['html:convert']);
  gulp.watch(SETTINGS.src.css, ['csslint']);
  gulp.watch(SETTINGS.src.scripts, ['eslint']);
});

/*********************************************
DEVELOPMENT Master Task
*/
gulp.task('development', ['wiredep','compass', 'eslint', 'csslint', 'html:convert', 'watch:development']);


