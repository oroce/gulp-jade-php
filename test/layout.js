'use strict';

var test = require('tap').test;

var task = require('../');
var fs = require('fs');
var gUtil = require('gulp-util');
var path = require('path');

var baseDir = path.join(__dirname, 'fixtures');
var filePath = path.join(baseDir, 'layout.jade');
var expected = fs.readFileSync('./expected/layout.php', 'utf8');

var file = new (gUtil.File)({
  path: filePath,
  base: baseDir,
  cwd: __dirname,
  contents: fs.readFileSync(filePath)
});

test('should render layout', function(t) {
  var s = task({
    pretty: true
  });

  s.on('data', function(result) {
    t.ok(result);
    t.ok(result.contents);
    t.equal(result.contents.toString(), expected);
    t.end();
  });

  s.write(file);
});