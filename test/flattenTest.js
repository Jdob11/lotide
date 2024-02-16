const assert = require('chai').assert;
const {flatten} = require('../index');

describe("#flatten", () => {

  it("should return \"Brooklyn Nine-Nine\" when searching for value \"comedy\"", () => {
    const nestedArray = flatten([1, 2, 3, [4, 5]]);
    assert.deepEqual(nestedArray, [1, 2, 3, 4, 5]);
  });

});
