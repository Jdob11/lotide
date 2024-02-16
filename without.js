//this function will take the source array and items to remove inputs, and return a new array lacking the items removed
const without = function(source, itemsToRemove) {
  const resultArray = [];

  for (let i = 0; i < source.length; i++) {
    let currentItem = source[i];
    if (!itemsToRemove.includes(currentItem)) {
      resultArray.push(currentItem);
    }
  }

  return resultArray;
};

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without([1, 2, 3, 4, 5], [2, 4]), [1, 3, 5]);
// assertArraysEqual(without([], [1, 2, 3]), []);
// assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
// assertArraysEqual(without([], []), []);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

