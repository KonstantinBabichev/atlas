var gulp      = require('gulp');
var compass = require('gulp-compass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var eslint = require('gulp-eslint');
var csslint = require('gulp-csslint');
var watch = require('gulp-watch');

var sourcePaths = {
  styles: ['!app/bower_components/**','app/**/*.scss'],
  scripts: ['!node_modules/**','!app/bower_components/**','!app/**/*_test.js','app/**/*.js','app/app.js']
};

var distPaths = {
  styles: 'app/styles'
};

var server = {
  host: 'localhost',
  port: '8001'
};


gulp.task('compass', function() {
  gulp.src(sourcePaths.styles)
  .pipe(compass({
    css: 'app/styles',
    sass: 'app/sass',
    comments: false
  }))
  .pipe(gulp.dest(distPaths.styles));
});

gulp.task('serve', ['compass'], function () {

  console.log('------------------>>>> firing server  <<<<-----------------------');
  browserSync.init(null, {
    server: {
      baseDir: 'app'
    },
    debugInfo: false,
    open: true,
    host: server.host,
    port: server.port
  }, function (err, bs) {
    console.log('Started connect web server on ' + server.host + ':' + server.port);
  });
});

// gulp.task('eslint', function () {
//   gulp.src(sourcePaths.scripts)
//     .pipe(eslint())
//     .pipe(eslint.format());
// });

gulp.task('eslint', function () {
  gulp.src(sourcePaths.scripts)
    .pipe(watch(function(files) {
      return files.pipe(eslint())
        .pipe(eslint.format());
    }));
});

gulp.task('csslint', function() {
  return gulp.src(distPaths.styles + '/styles.css')
    .pipe(watch(function(files) {
      return files.pipe(csslint('.csslintrc'))
      .pipe(csslint.reporter());
    }));
});

gulp.task('watch', function(){
  gulp.watch(sourcePaths.styles, ['compass']);
  //gulp.watch(sourcePaths.scripts, ['eslint']);
});

gulp.task('build', ['compass']);

gulp.task('default', ['build', 'serve', 'eslint', 'csslint', 'watch']);
