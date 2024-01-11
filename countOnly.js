const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {
  //create empty object to store results
  const result = {};
  // loop through array items
  for (const item of allItems) {
    // check if each item is in itemsToCount
    if (itemsToCount[item]) {
      // increment the counter for each item:
      // set a property with that string key to:
      // the value that was already there (or zero if nothing there) with 1 added to it.
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }

  // return the result object
  return result;
};

//test cases

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

