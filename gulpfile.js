var gulp      = require('gulp');
var compass = require('gulp-compass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var sourcePaths = {
  styles: ['sass/*.scss'] // watches for scss files in ANY folder
};

var distPaths = {
  styles: 'styles'
};

var server = {
  host: 'localhost',
  port: '8001'
}

// gulp.task('compass', function() {
//   gulp.src(sourcePaths.styles)
//   .pipe(compass({
//     config_file: './config.rb',
//     css: 'styles',
//     sass: '**'
//   }))
//   .pipe(gulp.dest(distPaths.styles)) // destination of sass files
//   .pipe(reload({stream:true})); // triggers browsersync to reload
// });
gulp.task('compass', function() {
  gulp.src(sourcePaths.styles)
  .pipe(compass({
    css: 'styles',
    sass: 'sass'
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

gulp.task('watch', function(){
  gulp.watch(sourcePaths.styles, ['compass']);
});

gulp.task('build', ['compass']);

gulp.task('default', ['build', 'serve', 'watch']);
