const gulp = require('gulp')
const inlinesource = require('gulp-inline-source')

const inline_source = () => (
  gulp.src('src/index.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('dist'))
)

const copy = () => (
  gulp.src(['src/**/*', '!src/index.html'])
    .pipe(gulp.dest('dist'))
)

module.exports = {
  copy: copy,
  inline_source: inline_source
}

gulp.task('default', gulp.series(
  copy,
  inline_source
))
