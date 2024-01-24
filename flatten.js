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

const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = flatArray.concat(array[i]);
    } else {
      flatArray.push(array[i]);
    }
    
  }
  return flatArray;
};

const nestedArray = flatten([1, 2, 3, [4, 5]]);
assertArraysEqual(nestedArray, [1, 2, 3, 4, 5]);