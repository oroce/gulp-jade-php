'use strict';

var through = require('through2');
var jade = require('jade');
var jadePhp = require('phpjade');
var handleExtension = require('./ext');
var handleCompile = require('./compile');
var PluginError = require('gulp-util').PluginError;

jadePhp.init(jade);

module.exports = function(options) {
  var opts = options || {};

  function compile(file, enc, cb) {
    opts.filename = file.path;

    if (file.data) {
      opts.data = file.data;
    }

    file.path = handleExtension(file.path, opts);

    if(file.isStream()){
      return cb(new PluginError('gulp-jade-php', 'Streaming not supported'));
    }

    if(file.isBuffer()){
      try {
        file.contents = new Buffer(handleCompile(String(file.contents), opts));
      } catch(e) {
        return cb(new PluginError('gulp-jade-php', e));
      }
    }
    cb(null, file);
  }

  return through.obj(compile);
};
