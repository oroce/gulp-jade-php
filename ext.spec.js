var test = require('tap').test;
var proxyquire = require('proxyquire');

test('should call replaceExtension', function(t) {
  var ext = proxyquire('./ext', {
    'gulp-util': {
      replaceExtension: function(filepath, extension) {
        t.equal(filepath, '/home/foo/bar');
        t.equal(extension, '.foo');
        t.end();
      }
    }
  });

  ext('/home/foo/bar', {
    extension: '.foo'
  });
});


test('should call replaceExtension with default .php', function(t) {
  var ext = proxyquire('./ext', {
    'gulp-util': {
      replaceExtension: function(filepath, extension) {
        t.equal(filepath, '/home/foo/bar');
        t.equal(extension, '.php');
        t.end();
      }
    }
  });

  ext('/home/foo/bar', {});
});
