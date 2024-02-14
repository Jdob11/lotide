const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {

  it("should return 1 when input is [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return '5' when input is ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("should return 5 when input is [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5); 
  });

  it("should return 'Hello' when input is ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });

  it("should return undefined when input is []", () => {
    assert.strictEqual(head([]), undefined); 
  });

  it("should throw the error \"Input must be an array.\" if given anything but an array", () => {
    assert.throws(() => head("Banana"), Error, "Input must be an array.");
  })

});
