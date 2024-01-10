const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arr1, arr2) {
  let areEqual = false;
  //test if arrays are equal length
  if (arr1.length === arr2.length) {
    areEqual = true;
    //loop to compare that array elements are the same, and break the loop if they aren't
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        areEqual = false;
        break;
      }
    }
  }

  return areEqual;
};


//tests of eqArrays function
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

console.log(eqArrays([],[1, 2, 3]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([], [1, 2, 3]), false);


