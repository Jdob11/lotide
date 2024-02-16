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

//a function to compare if two objects are equal
const eqObjects = function(object1, object2) {
  //assign the keys of each object
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  //compare if each object has the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }
  //loop the sorted keys in object1
  for (let key in object1) {
    //if the value of the current key is an array, run eqArrays on both arrays to compare if they're equal
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  //return true if none of the other comparisons return false
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

// assertObjectsEqual({ name:"jeff", age: 37}, { name:"jeff", age: 37}); // should pass
// assertObjectsEqual({ name:"jeff", age: 37}, { name:"jeff", age: 38}); // should fail
// assertObjectsEqual({ name:"jeff", age: 37, hobbies: ["coding", "reading"]}, { name:"jeff", age: 37, hobbies: ["coding", "reading"]}); // should pass
// assertObjectsEqual({ name:"jeff", age: 37, hobbies: ["coding", "reading"]}, { name:"jeff", age: 37, hobbies: ["coding", "gaming"]}); // should fail



