const assert = require('chai').assert;
const {map} = require('../index');

describe("#map", () => {
  
  const words = ["ground", "control", "to", "major", "tom"];

  it("should return first letters when given callback fed index [0]", () => {
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });

  it("should return capitalized words when given callback fed .toUpperCase()", () => {
    const results2 = map(words, word => word.toUpperCase());
    assert.deepEqual(results2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
  });

  it("should return appropriate characters when given callback with index position and undefined in index position doesn't exist in word", () => {
    const results3 = map(words, word => word[2]);
    assert.deepEqual(results3, ['o', 'n', undefined, 'j', 'm']);
  });

});
