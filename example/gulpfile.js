var gulp = require('gulp');
var jadePhp = require('..');
gulp.task('default', function() {
  // place code for your default task here
  gulp.src('*.jade')
    .pipe(jadePhp({
      pretty: true,
      locals: {
        poweredBy: 'Powered by gulp-jade-php'
      }
    }))
    .pipe(gulp.dest('./'));
});
