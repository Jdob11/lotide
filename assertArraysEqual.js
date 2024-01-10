
const eqArrays = function(arr1, arr2) {
  let isEqual = true;
  //confirming arrays are an equal length
  if (arr1.length !== arr2.length) {
    isEqual = false;
  }
  //loop to compare that individual array elements are the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
    }
  }
  return isEqual;
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertArraysEqual(eqArrays([], [1, 2, 3]), false);
assertArraysEqual(eqArrays([], []), true);