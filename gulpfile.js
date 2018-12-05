var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

gulp.task('sass', function() {
  return gulp.src('/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('/css'))
    .pipe(browserSync.reload({
      stream: true
}))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('/scss/**/*.scss', ['sass']);
  // Other watchers
  gulp.watch('/*.html', browserSync.reload);
  gulp.watch('/js/**/*.js', browserSync.reload);
})
