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

module.exports = countLetters;








































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

