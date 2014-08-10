require('mocha/mocha.css');
var $ = require('jquery');
require('mocha');

mocha.setup('bdd');

require('./solve-quadratic-equation_test');

$(function() {
  mocha.run();
});
