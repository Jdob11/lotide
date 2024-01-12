const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {

  it("returns array of proper length", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, 2);
  });

  it("returns proper new value at array position 0", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words)[0], "Lighthouse"); 
  });

  it("returns proper new value at array position 1", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words)[1], "Labs");
  });

  it("confirms original array was not mutatued by tail", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3);
  });

  it("confirms when given one element an empty array is returned", () => {
    const moreWords = ["More"];
    assert.deepEqual(tail(moreWords), []);
  });

  it("confirms when given no elements an empty array is returned", () => {
    const mostWords = [];
    assert.deepEqual(tail(mostWords), []);
  });

});
