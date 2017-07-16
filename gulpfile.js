var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'site'
    },
  })
})

gulp.task('sass', function() {
  return gulp.src('site/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('site/css'))
    .pipe(browserSync.reload({
      stream: true
}))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('site/scss/**/*.scss', ['sass']);
  // Other watchers
  gulp.watch('site/*.html', browserSync.reload);
  gulp.watch('site/js/**/*.js', browserSync.reload);
})
