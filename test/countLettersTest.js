const assert = require('chai').assert;
const _ = require('../index');

describe("#countLetters", () => {

  it("should return 1 when input is \"l\"", () => {
    const result1 = _.countLetters("lighthouse in the house");
    assert.strictEqual(result1["l"], 1);
  });

  it("should return 2 when input is \"i\"", () => {
    const result1 = _.countLetters("lighthouse in the house");
    assert.strictEqual(result1["i"], 2);
  });

  it("should return 3 when input is \"e\"", () => {
    const result1 = _.countLetters("lighthouse in the house");
    assert.strictEqual(result1["e"], 3);
  });

});

