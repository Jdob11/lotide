
const eqArrays = function(arr1, arr2) {
  //confirming arrays are an equal length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop to compare that individual array elements are the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
//this function compares if two arrays are equal and sends a pass of fail message
const assertArraysEqual = function(actual, expected) {
  let isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

//this function gives the middle most element or elements of a given array
const middle = function(arr) {
  const length = arr.length;
  //returns an empty array if there are less than 2 elements
  if (length <= 2) {
    return [];
  }
  //finds the middle index of an array and rounds to the nearest whole number
  const middleIndex = Math.floor(length / 2);
  //returns the two middle most elements in an even array
  if (length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    // returns single middle element for an odd  numbered array
    return [arr[middleIndex]];
  }
};

// Test cases
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);