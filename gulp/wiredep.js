'use strict';

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;
  gulp.src('app/styles/*.scss') // NATH: revisit this config item after getting compass working correctly
    .pipe(wiredep({
      cwd: SETTINGS.src.app
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      cwd: SETTINGS.src.app
    }))
    .pipe(gulp.dest(SETTINGS.src.app));
});
