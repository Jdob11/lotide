const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

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
  //compare if each object has the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //loop the keys in object1
  for (let key in object1) {
    //if the value of the current key is an array, run eqArrays on both arrays to compare if they're equal
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    //otherwise, compare the values and return false if they aren't equal
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  //return true if none of the other comparisons return false
  return true;
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);


















































// const eqObjects = function(object1, object2) {
//   //compare if the objects contain the same number of keys
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   }

//   const keysArray = Object.keys(object1);

//   for (const key of keysArray) {
//     //check if objects are arrays
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       //use eqArrays to compare arrays
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else {
//       //compare primitive values to each other if not
//       if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// module.exports = eqObjects;


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject, longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
