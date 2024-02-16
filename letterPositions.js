
const letterPositions = function(sentence) {
  //create object to hold results
  const results = {};
  if (typeof sentence !== 'string') {
    throw new Error('Input must be string');
  }
  //loops through characters in sentence
  for (let i = 0; i < sentence.length; i++) {
    //create variable for current character of sentence
    const char = sentence[i];
    //rule out spaces
    if (char !== ' ') {
      //add array for current character to results object if it doesnt exist
      results[char] = results[char] || [];
      //push index position to character array
      results[char].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;


