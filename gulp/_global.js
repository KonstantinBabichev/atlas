
var gulp = require('gulp');

global.$ = require('gulp-load-plugins')({
  pattern: [
    'gulp-*',
    'dgeni',
    'main-bower-files',
    'uglify-save-license',
    'browser-sync',
    'chalk',
    'map-stream'
  ]
});

global.reload = $.browserSync.reload;


global.onError = function (err) {
  beep([0, 0, 0]);
  $.util.log($.util.colors.green(err));
};

// chalk config
global.errorLog  = $.chalk.red.bold;
global.hintLog   = $.chalk.blue;
global.changeLog = $.chalk.red;


global.server = {
  host: 'localhost',
  devPort: '8001',
  prodPort: '9001'
};

global.SETTINGS = {
  src: {
    app: 'app/', // dev application folder
    css: 'app/styles/', // compiled css
    styles: [ // SASS files
      '!app/bower_components/**', // ignore any scss files in bower-ingested folders
      '!app/**/_extends.scss', '!app/**/_mixins.scss', '!app/**/_variables.scss', // ignore north-inspired files, which are brought in by their parent .scss file
      'app/**/*.scss',
      'app/styles/styles.scss'], // calls main style sass file, which imports the others
    scripts: [ // Application javascripts
      '!docs/**', // ignore documentation section
      '!app/bower_components/**', // ignore bower-ingested scripts
      '!app/**/*_test.js', // ignore our test scripts
      'app/scripts/templates.js', // template script
      'app/scripts/app.js', // main app script
      'app/**/*.js'], // main application file
    scriptMain: 'app/scripts/app.js',
    scriptTemplates: 'app/scripts/templates.js',
    scriptFolder: 'app/scripts/',
    templates: 'app/templates/',
    html: [
      '!app/bower_components/**', // ignore bower-ingested
      '!app/index.html', // ignore main index file
      'app/**/*.html' // find all other html files
      ],
    htmlMain: 'app/index.html',
    images: 'app/img/',
    fonts: 'app/fonts/',
    bower: 'app/bower_components/',
    docs: 'docs/partials'
  },
  build: {
    app: 'build/',
    css: 'build/css/',
    js: 'build/js/',
    templates: 'build/templates/',
    html: 'build/html',
    htmlMain: 'build/*.html',
    images: 'build/img/',
    fonts: 'build/fonts/',
    bower: 'build/bower/' // If you change this, you will have to change in index.html as well.
  },
  scss: 'scss/'
};


