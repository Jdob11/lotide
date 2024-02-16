const assert = require('chai').assert;
const {countOnly} = require('../index');

describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("should return 1 when input is \"Jason\"", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("should return undefined when input is \"Karima\"", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("should return 2 when input is \"Fang\"", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("should return undefined when input is \"Agouhanna\"", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});