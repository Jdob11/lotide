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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      newArr += arr[i];
    }
  }
  return newArr;
};
//tests of assertEquals on tail function
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(words[0], "Yo Yo");
assertEqual(words[1], "Lighthouse");
assertEqual(words[2], "Labs");
assertEqual(words[1], "Banana");
//more tests to confirm tail function
const moreWords = ["More"];
const mostWords = [];
console.log(tail(words));
console.log(tail(moreWords));
console.log(tail(mostWords));
