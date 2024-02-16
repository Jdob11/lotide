const assert = require('chai').assert;
const {eqArrays} = require('../index');

describe("#eqArrays", () => {

  it("should return true when comparing two equal number arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false when comparing two different arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("should return true when comparing two equal string arrays arrays", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("should return false when comparing a string vs number in an otherwise equal array", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("should return false when comparing a blank array to a populated array", () => {
    assert.strictEqual(eqArrays([], [1, 2, 3]), false);
  });

  it("should return true when comparing two blank arrays", () => {
    assert.strictEqual(eqArrays([], []), true);
  });

});
