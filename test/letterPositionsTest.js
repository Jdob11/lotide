const assert = require('chai').assert;
const {letterPositions} = require('../index');

describe("#letterPositions", () => {
  
  let result = letterPositions("Hello World!");

  it("should return [0] when searching for value \"H\"", () => {
    assert.deepEqual(result['H'], [0]);
  });

  it("should return single index position when searching for value that only appears once", () => {
    assert.deepEqual(result['e'], [1]);
  });

  it("should return all index positions when searching for value that appears multiple times", () => {
    assert.deepEqual(result['l'], [2, 3, 9]);
  });

  it("should return all index positions when searching for value that appears multiple times", () => {
    assert.deepEqual(result['l'], [2, 3, 9]);
  });

});