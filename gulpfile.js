'use strict';

var gulp = require('gulp'),
  chalk = require('chalk'),
  bowerFiles = require('main-bower-files'),
  map = require('map-stream'),
  path = require('path'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  gulpPlugins = require('gulp-load-plugins')();

// chalk config
var errorLog  = chalk.red.bold,
  hintLog   = chalk.blue,
  changeLog = chalk.red;

var onError = function (err) {
  beep([0, 0, 0]);
  gutil.log(gutil.colors.green(err));
};

var SETTINGS = {
  src: {
    app: 'app/', // dev application folder
    css: 'app/styles/', // compiled css
    styles: [ // SASS files
      '!app/bower_components/**', // ignore any scss files in bower-ingested folders
      'app/styles.scss'], // calls main style sass file, which imports the others
    scripts: [ // Application javascripts
      '!app/bower_components/**', // ignore bower-ingested scripts
      '!app/**/*_test.js', // ignore our test scripts (for now)
      'app/**/*.js', // finds all app files in their folders
      'app/app.js'], // main application file
    templates: 'app/templates/',
    images: 'app/img/',
    fonts: 'app/fonts/',
    bower: 'app/bower_components/'
  },
  build: {
    app: 'build/',
    css: 'build/css/',
    js: 'build/js/',
    templates: 'build/templates/',
    images: 'build/img/',
    fonts: 'build/fonts/',
    bower: 'build/bower/' // If you change this, you will have to change in index.html as well.
  },
  scss: 'scss/'
};

var bowerConfig = {
  paths: {
    bowerDirectory: SETTINGS.src.bower,
    bowerrc: '.bowerrc',
    bowerJson: 'bower.json'
  }
};

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
  console.log('-------------------------------------------------- Compass .scss conversion');

  gulp.src(SETTINGS.src.styles)
  .pipe(gulpPlugins.compass({
    css: 'app/styles',
    sass: 'app',
    comments: false,
    style: 'nested'
  }))
  .on('error', function(err) {
    // Would like to catch the error here
  })
  .pipe(gulp.dest(SETTINGS.src.css));
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
  gulp.src(SETTINGS.src.scripts)
    .pipe(gulpPlugins.watch(function(files) {
      return files.pipe(gulpPlugins.eslint())
        .pipe(gulpPlugins.eslint.format());
    }));
});

gulp.task('csslint', function() {
  return gulp.src(SETTINGS.src.css + '/styles.css')
    .pipe(gulpPlugins.watch(function(files) {
      return files.pipe(gulpPlugins.csslint('.csslintrc'))
      .pipe(gulpPlugins.csslint.reporter());
    }));
});

/*============================================================
= Production Build
============================================================*/
gulp.task('concat', ['concat:bower', 'concat:js', 'concat:css']);

gulp.task('concat:bower', function () {
  console.log('-------------------------------------------------- CONCAT :bower');

  // this section uses 'gulp-filter' to find all files of these types:
  var jsFilter = gulpPlugins.filter('**/*.js'),
    cssFilter = gulpPlugins.filter('**/*.css'),
    assetsFilter = gulpPlugins.filter(['!**/*.js', '!**/*.css', '!**/*.scss']);

  console.log('-------------------------------------------------- bower script files:');
  console.log(bowerFiles(bowerConfig));

  var stream = gulp.src(bowerFiles(bowerConfig), {base: SETTINGS.src.bower}) // narrowed to just bower-files

    .pipe(jsFilter)
    .pipe(gulpPlugins.concat('_bower.js'))
    .pipe(gulpPlugins.uglify())
    //.pipe(gulpPlugins.if(isProduction, gulpPlugins.uglify()))
    .pipe(gulp.dest(SETTINGS.build.bower))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(gulpPlugins.sass())
    .pipe(map(function (file, callback) {
      var relativePath = path.dirname(path.relative(path.resolve(SETTINGS.src.bower), file.path));
      // CSS path resolving
      // Taken from https://github.com/enyojs/enyo/blob/master/tools/minifier/minify.js
      var contents = file.contents.toString().replace(/url\([^)]*\)/g, function (match) {
        // find the url path, ignore quotes in url string
        var matches = /url\s*\(\s*(('([^']*)')|("([^"]*)")|([^'"]*))\s*\)/.exec(match),
          url = matches[3] || matches[5] || matches[6];

        // Don't modify data and http(s) urls
        if (/^data:/.test(url) || /^http(:?s)?:/.test(url)) {
          return 'url(' + url + ')';
        }
        return 'url(' + path.join(path.relative(SETTINGS.build.bower, SETTINGS.build.app), SETTINGS.build.bower, relativePath, url) + ')';
      });
      file.contents = new Buffer(contents);

      callback(null, file);
    }))
    .pipe(gulpPlugins.concat('_bower.css'))
    .pipe(gulp.dest(SETTINGS.build.bower))
    .pipe(cssFilter.restore())
    .pipe(assetsFilter)
    .pipe(gulp.dest(SETTINGS.build.bower))
    .pipe(assetsFilter.restore());
  return stream;
});

gulp.task('concat:js', function () {

  console.log('-------------------------------------------------- CONCAT :js');
  gulp.src(SETTINGS.src.scripts)
      .pipe(gulpPlugins.concat('all.js'))
      .pipe(gulpPlugins.uglify())
      //.pipe(gulpPlugins.if(isProduction, gulpPlugins.uglify()))
      .pipe(gulp.dest(SETTINGS.build.js));
});

gulp.task('concat:css', ['compass'], function () {

  console.log('-------------------------------------------------- CONCAT :css ');
  gulp.src([SETTINGS.src.css + '*.css'])
      .pipe(gulpPlugins.concat('styles.css'))
      //.pipe(gulpPlugins.if(isProduction, gulpPlugins.minifyCss({keepSpecialComments: '*'})))
      .pipe(gulpPlugins.minifyCss({keepSpecialComments: '*'}))
      .pipe(gulp.dest(SETTINGS.build.css));
});

gulp.task('watch', function(){
  gulp.watch(sourcePaths.styles, ['compass']);
  //gulp.watch(sourcePaths.scripts, ['eslint']);
});

gulp.task('build', ['compass']);

gulp.task('default', ['build', 'serve', 'eslint', 'csslint', 'concat:js', 'watch']);
