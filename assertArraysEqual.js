/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};
*/

const assertArraysEqual = function(arr1, arr2) {
  //confirming arrays are an equal length
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  } else {
  //loop to compare that individual array elements are the same
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
        break;
      }
    }
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], []);