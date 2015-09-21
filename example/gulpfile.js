var gulp = require('gulp');
var jadePhp = require('..');
var changed = require('gulp-changed');
gulp.task('compile', function() {
  // place code for your default task here
  return gulp.src('*.jade')
    .pipe(changed('./', {
      extension: '.php'
    }))
    .pipe(jadePhp({
      pretty: true,
      locals: {
        poweredBy: 'Powered by gulp-jade-php'
      }
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
  return gulp.watch('*.jade', {}, ['compile']);
});
