const assert = require('chai').assert;
const {findKeyByValue} = require('../index');

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it("should return \"Brooklyn Nine-Nine\" when searching for value \"comedy\"", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it("should return \"The Wire\" when searching for value \"drama\"", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return undefined when searching for value that doesn't exist", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("should return appropriate key when searching for number", () => {
    assert.strictEqual(findKeyByValue({ key1: 123, key2: null, key3: true }, 123), "key1");
  });

  it("should return undefined when searching an empty object", () => {
    assert.strictEqual(findKeyByValue({}, "Some Value"), undefined);
  });

  it("should return appropriate value when searching for non string or number values", () => {
    assert.strictEqual(findKeyByValue({ key1: undefined, key2: null, key3: "value" }, null), "key2");
  });

});