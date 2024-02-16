const assert = require('chai').assert;
const {without} = require('../index');

describe("#without", () => {
  
  const words = ["ground", "control", "to", "major", "tom"];

  it("should return appropriate array when given arrays with numbers", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("should return appropriate array without coercion when given arrays with numbers and strings", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("should return empty array when empty initial array", () => {
    assert.deepEqual(without([], [1, 2, 3]), []);
  });

  it("should return unaltered array when empty array to remove", () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });

  it("should return empty array when empty initial array and empty array to remove", () => {
    assert.deepEqual(without([], []), []);
  });

  it("should not alter original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});