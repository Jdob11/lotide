const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(arr) {
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const singleElementArray = tail(["Hello"]);
assertEqual(singleElementArray.length, 0); // ensure we get back zero elements

const emptyArray = tail([]);
assertEqual(emptyArray.length, 0); // ensure we get back zero elements