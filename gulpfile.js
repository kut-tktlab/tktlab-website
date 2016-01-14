var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var buildTasks = ['html', 'stylesheets', 'images', 'stylesheets'];
var destDir = './public/';

if (process.env.CI) destDir = './www/';

gulp.task('webserver', function () {
  gulp.src('public')
    .pipe(plugins.webserver({
      root: './public',
      livereload: true,
      host: '0.0.0.0'
    }));
});

gulp.task('html', function () {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest(destDir));
});

gulp.task('stylesheets', function () {
  gulp.src('./src/stylesheets/**/*.styl')
    .pipe(plugins.stylus())
    .pipe(gulp.dest(destDir + 'stylesheets'));
});

gulp.task('images', function () {
  gulp.src('./src/images/**/*.{png,jpg,jpeg,svg}')
    .pipe(gulp.dest(destDir + 'images'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.html'], ['html']);
  gulp.watch(['./src/stylesheets/**/*.styl'], ['stylesheets']);
  gulp.watch(['./src/images/**/*.{png,jpg,jpeg,svg}'], ['images']);
});

gulp.task('build', buildTasks);
gulp.task('default', buildTasks.concat('webserver', 'watch'));
