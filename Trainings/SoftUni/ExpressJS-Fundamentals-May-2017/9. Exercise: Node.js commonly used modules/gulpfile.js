const gulp = require('gulp');
const uglify = require('gulp-uglify');
const del = require('del');

gulp.task('scripts', () => {
  del.sync('build/**');

  return gulp.src([
    './content/jquery/dist/jquery.js'
  ])
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});
