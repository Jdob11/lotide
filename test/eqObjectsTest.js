const assert = require('chai').assert;
const {eqObjects} = require('../index');

describe("#eqObjects", () => {

  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

  it("should return true when comparing two objects with the same key: value pairs", () => {
    assert.strictEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });

  it("should return false when comparing two objects with at least one different key:value pair", () => {
    assert.strictEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });

  it("should return true when comparing two objects with same key: value pairs including arrays", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
  });

  it("should return false when comparing two objects with at least one different key:value pair including arrays", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
  });

});