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
const assertArraysEqual = function(arr1, arr2) {
  let isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }

};


//this function gives the middle most element or elements of a given array
const middle = function(arr) {
  const length = arr.length;
  //console logs error message if input is not an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }
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

const arrayTest1 = middle([1, 2, 3, 4, 5]);
assertArraysEqual(arrayTest1, [3]);

const arrayTest2 = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(arrayTest2, [3, 4]);

const arrayTest3 = middle([1, 2]);
assertArraysEqual(arrayTest3, []);

const arrayTest4 = middle([]);
assertArraysEqual(arrayTest4, []);

middle("Banana");


