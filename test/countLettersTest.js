const assert = require('chai').assert;
const {countLetters} = require('../index');

describe("#countLetters", () => {

  const result1 = countLetters("lighthouse in the house");

  it("should return 1 when input is \"l\"", () => {
    assert.strictEqual(result1["l"], 1);
  });

  it("should return 2 when input is \"i\"", () => {
    assert.strictEqual(result1["i"], 2);
  });

  it("should return 3 when input is \"e\"", () => {
    assert.strictEqual(result1["e"], 3);
  });

});

