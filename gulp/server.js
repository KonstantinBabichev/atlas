'use strict';
var gulp = require('gulp');
gulp.task('serve', ['development', 'dev:watch'], function () {

  console.log('------------------>>>> firing DEV server  <<<<-----------------------');
  $.browserSync.init(null, {
    server: {
      baseDir: 'app'
    },
    debugInfo: false,
    open: true,
    host: server.host,
    port: server.devPort
  }, function (err, bs) {
    console.log('Started connect web server on ' + server.host + ':' + server.devPort);
  });
});

gulp.task('serve:build', ['build'], function () {

  console.log('------------------>>>> firing BUILD server  <<<<-----------------------');
  $.browserSync.init(null, {
    server: {
      baseDir: 'build'
    },
    debugInfo: false,
    open: true,
    host: server.host,
    port: server.prodPort
  }, function (err, bs) {
    console.log('Started connect web server on ' + server.host + ':' + server.prodPort);
  });
});
