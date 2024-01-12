const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


describe("#middle", () => {

  it("returns middle value if given odd numbered array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns two middle values when given an even numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });

  it("returns empty array given a single value array", () => {
    assert.deepEqual(middle([1]), []); 
  });

  it("returns an empty array given an empty array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns an empty array when given a two value array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

});

