var proxyquire = require('proxyquire');
var test = require('tap').test;

test('compile with locals', function(t) {
  var compile = proxyquire('./compile', {
    jade: {
      compile: function(contents, opts) {
        var fn = function(locals) {
          t.similar(locals, {
            'foolocal': 'barlocal'
          });
          t.end();
        };
        t.equal(contents, 'foobar');
        t.similar(opts, {
          locals: {
            'foolocal': 'barlocal'
          },
          foo: 'bar'
        });
        return fn;
      }
    }
  });

  compile('foobar', {
    locals: {
      'foolocal': 'barlocal'
    },
    foo: 'bar'
  });
});


test('compile with data', function(t) {
  var compile = proxyquire('./compile', {
    jade: {
      compile: function(contents, opts) {
        var fn = function(locals) {
          t.similar(locals, {
            'foodata': 'bardata'
          });
          t.end();
        };
        t.equal(contents, 'foobar');
        t.similar(opts, {
          data: {
            'foodata': 'bardata'
          },
          foo: 'bar'
        });
        return fn;
      }
    }
  });

  compile('foobar', {
    data: {
      'foodata': 'bardata'
    },
    foo: 'bar'
  });
});
