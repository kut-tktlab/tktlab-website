var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

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
    .pipe(gulp.dest('./public/'));
});

gulp.task('stylesheets', function () {
  gulp.src('./src/stylesheets/**/*.styl')
    .pipe(plugins.stylus())
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('images', function () {
  gulp.src('./src/images/**/*.{png,jpg,jpeg,svg}')
    .pipe(gulp.dest('./public/images'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.html'], ['html']);
  gulp.watch(['./src/stylesheets/**/*.styl'], ['stylesheets']);
  gulp.watch(['./src/images/**/*.{png,jpg,jpeg,svg}'], ['images']);
});

gulp.task('default', ['html', 'stylesheets', 'images', 'stylesheets', 'webserver', 'watch']);
