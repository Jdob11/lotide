const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  it("should return array that is one less than given array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, 2);
  });

  it("should return value from index [1] of original array at index[0] of new array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words)[0], "Lighthouse"); 
  });

  it("should return value from index [2] of original array at index[1] of new array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words)[1], "Labs");
  });

  it("should not mutate original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3);
  });

  it("should return an empty array when given single word array", () => {
    const moreWords = ["More"];
    assert.deepEqual(tail(moreWords), []);
  });

  it("should return an empty array when given an empty array", () => {
    const mostWords = [];
    assert.deepEqual(tail(mostWords), []);
  });

});
