var jade = require('jade');
function compile(contents, opts){
  return jade.compile(contents, opts)(opts.locals || opts.data);
}

module.exports = compile;
