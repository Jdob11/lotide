const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;


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
