const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(string) {
  //create object to contain final counts
  let results = {};
  //loop each letter of string
  for (const letter of string) {
    //add current letter to results object if it isn't there already, increase count by one if it is
    if (letter !== ' ')
      results[letter] = (results[letter] || 0) + 1;
  }
  //return results object with final counts
  return results;
};



const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["e"], 3);








































// const countLetters = function(sentence) {
//   //create empty object to store results
//   const result = {};
//   for (const letter of sentence) {
//     if (letter !== " ") {
//       if (result[letter]) {
//         result[letter] += 1;
//       } else {
//         result[letter] = 1;
//       }
//     }
//   }
//   return result;
// };

// module.exports = countLetters;

