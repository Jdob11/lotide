const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

//function to return first key that matches callback value
const findKey = function(object, callback) {
  //loop through keys of given object
  for (const key in object) {
    //for current key, set 'value' to the value of that key
    const value = object[key];
    //set result as callback with parameter of the value of the current key
    const result = callback(value);
    //if callback with current keys value returns true, then value given to callback function is the same as the current keys value, so return current key
    if (result) {
      return key;
    }
  }
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");
