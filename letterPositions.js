
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

//function that takes a string and returns an object given the index locations of each character
const letterPositions = function(sentence) {
  // create an empty object to store results.
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    // Check if the current character is not a space.
    if (sentence[i] !== ' ') {
      //if character is already a key, push index
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        //if character is not a key, create array and assign current index
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

let result = letterPositions("hello");
assertArraysEqual(result.e, [1]);
assertArraysEqual(result.h, [0]);
assertArraysEqual(result.l, [2, 3]);
assertArraysEqual(result.o, [4]);


