const eqArrays = require('./eqArrays');

//this function compares if two arrays are equal and sends a pass of fail message
const assertArraysEqual = function(actual, expected) {
  let isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

module.exports = assertArraysEqual;