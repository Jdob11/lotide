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

