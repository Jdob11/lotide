const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

//function to search object for given value and return key
const findKeyByValue = function(object, value) {
  //loop through object keys
  for (let key in object) {
    //check object value of current key matches the value given to function, return current key
    if (object[key] === value) {
      return key;
    }
  }

};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "the expanse"), undefined);
assertEqual(findKeyByValue({ key1: 123, key2: null, key3: true }, 123), "key1");
assertEqual(findKeyByValue({}, "Some Value"), undefined);
assertEqual(findKeyByValue({ key1: "value1", key2: "value2" }, "value1"), "key1");
assertEqual(findKeyByValue({ key1: "value1", key2: "value2" }, "value3"), undefined);
assertEqual(findKeyByValue({ key1: undefined, key2: null, key3: "value" }, null), "key2");