var gulp      = require('gulp');
var compass = require('gulp-compass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var eslint = require('gulp-eslint');
var csslint = require('gulp-csslint');
var watch = require('gulp-watch');

var sourcePaths = {
  styles: ['!node_modules/**','!bower_components/**','**/*.scss'],
  scripts: ['!node_modules/**','!bower_components/**','!**/*_test.js','**/*.js','app.js']
};

var distPaths = {
  styles: 'styles'
};

var server = {
  host: 'localhost',
  port: '8001'
};


gulp.task('compass', function() {
  gulp.src(sourcePaths.styles)
  .pipe(compass({
    css: 'styles',
    sass: 'sass',
    comments: false
  }))
  .pipe(gulp.dest(distPaths.styles));
});

gulp.task('serve', ['compass'], function () {
  browserSync.init(null, {
    server: {
      baseDir: '.'
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
