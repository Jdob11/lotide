
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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const results1 = map(words, word => word[0]);
const results2 = map(words, word => word);
const results3 = map(words, word => word[2]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'ground', 'control', 'to', 'major', 'tom' ]);
assertArraysEqual(results3, [ 'o', 'n', undefined, 'j', 'm' ]);
