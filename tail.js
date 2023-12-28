//function to compare if parameters are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};
//function to return tail of an array
const tail = function(arr) {
  let newArr = [];
  newArr = arr.slice(1)
  return newArr;
};
//tests of assertEquals on tail function
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");
//more tests to confirm tail function
const moreWords = ["More"];
const mostWords = [];
assertEqual(tail(moreWords).length, 0);
assertEqual(tail(mostWords).length, 0);
