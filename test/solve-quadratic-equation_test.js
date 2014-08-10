var solveQuadraticEquation = require("../index");
var assert = require("assert");

describe('solveQuadraticEquation', function(){
  describe('Two roots', function(){
    it('should return two roots for x * x - 5 * x + 6 = 0', function(){
      var roots = solveQuadraticEquation(1, -5, 6);
      assert.equal(2, roots.length);
      assert.equal(2, roots[0]);
      assert.equal(3, roots[1]);
    });

    it('should return two roots for x * x + 5 * x + 6 = 0', function(){
      var roots = solveQuadraticEquation(1, 5, 6);
      assert.equal(2, roots.length);
      assert.equal(-3, roots[0]);
      assert.equal(-2, roots[1]);
    });
  });

  describe('One root', function(){
    it('should return one root for x * x - 2 * x + 1 = 0', function(){
      var roots = solveQuadraticEquation(1, -2, 1);
      assert.equal(1, roots.length);
      assert.equal(1, roots[0]);
    });
  });

  describe('No root', function(){
    it('should return no root for x * x + 1 = 0', function(){
      var roots = solveQuadraticEquation(1, 0, 1);
      assert.equal(0, roots.length);
    });
  });

  describe('One root for linear equation', function(){
    it('should return no root for 2 * x + 3 = 0', function(){
      var roots = solveQuadraticEquation(0, 2, 3);
      assert.equal(1, roots.length);
      assert.equal(-3 / 2, roots[0]);
    });
  });

  describe('No root for linear equation', function(){
    it('should return no root for 3 = 0', function(){
      var roots = solveQuadraticEquation(0, 0, 3);
      assert.equal(0, roots.length);
    });
  });

  describe('Ary value for trivial equation', function(){
    it('should return an array of length 3 for 0 = 0', function(){
      var roots = solveQuadraticEquation(0, 0, 0);
      assert.equal(3, roots.length);
    });
  });
});
