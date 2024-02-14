const assert = require('chai').assert;
const _ = require('../index');

describe("#middle", () => {

  it("should return middle value when given odd numbered array", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });

  it("should return two middle values when given an even numbered array", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]); 
  });

  it("should return empty array given a single value array", () => {
    assert.deepEqual(_.middle([1]), []); 
  });

  it("should return an empty array given an empty array", () => {
    assert.deepEqual(_.middle([]), []);
  });

  it("should return an empty array when given a two value array", () => {
    assert.deepEqual(_.middle([1, 2]), []);
  });

  it("should throw the error \"Input must be an array.\" if given anything but an array", () => {
    assert.throws(() => _.middle("Banana"), Error, "Input must be an array.");
  })

});
