const tail = require('../tail');

const assertEqual = require('../assertEqual');

//ensure tail does not mutate original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Test case: heck the tail of an array with multiple elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");//ensure second element is "Labs"

// Test case: Check the tail of an array with a single element
const singleElementArray = tail(["Hello"]);
assertEqual(singleElementArray.length, 0); // ensure we get back zero elements

// Test case: Check the tail of an empty array
const emptyArray = tail([]);
assertEqual(emptyArray.length, 0); // ensure we get back zero elements
