
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

const letterPositions = function(sentence) {
  //create object to hold results
  const results = {};
  //loops through characters in sentence
  for (let i = 0; i < sentence.length; i++) {
    //create variable for current character of sentence
    const char = sentence[i];
    //rule out spaces
    if (char !== ' ') {
      //add array for current character to results object if it doesnt exist
      results[char] = results[char] || [];
      //push index position to character array
      results[char].push(i);
    }
  }
  return results;
};

let result = letterPositions("Hello World!");
assertArraysEqual(result['H'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3, 9]);
assertArraysEqual(result['o'], [4, 7]);
assertArraysEqual(result['W'], [6]);
assertArraysEqual(result['r'], [8]);
assertArraysEqual(result['d'], [10]);
assertArraysEqual(result['!'], [11]);


