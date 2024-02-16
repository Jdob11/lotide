const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
