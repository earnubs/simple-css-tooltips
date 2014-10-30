var gulp = require('gulp');
var compress = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build', function() {
  gulp.src('src/*.css')
  .pipe(autoprefixer())
  .pipe(compress())
  .pipe(gulp.dest('.'));
});

gulp.task('default', ['build']);
