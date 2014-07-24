'use strict';

var through = require('through2');
var jade = require('jade');
var jadePhp = require('jade-php');
var ext = require('gulp-util').replaceExtension;
var PluginError = require('gulp-util').PluginError;

jadePhp(jade);

function handleCompile(contents, opts){
  return jade.compile(contents, opts)(opts.locals || opts.data);
}

function handleExtension(filepath, opts) {
  return ext(filepath, opts.extension || '.php');
}

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