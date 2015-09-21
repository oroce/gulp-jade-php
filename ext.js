var ext = require('gulp-util').replaceExtension;
function extension(filepath, opts) {
  return ext(filepath, opts.extension || '.php');
}

module.exports = extension;
