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

const eqObjects = function(object1, object2) {
  //compare if the objects contain the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  const keysArray = Object.keys(object1);

  for (const key of keysArray) {
    //check if objects are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //use eqArrays to compare arrays
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      //compare primitive values to each other if not
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

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

assertObjectsEqual({ name:"jeff", age: 37}, { name:"jeff", age: 37});



