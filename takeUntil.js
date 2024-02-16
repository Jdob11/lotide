//function to return new array of given array items until callback function is met
const takeUntil = function(array, callback) {
  //create variable for new array
  const newArray = [];
  //loop array items
  for (const item of array) {
    //if item is not equal to callback function, push to new array
    if (!callback(item)) {
      newArray.push(item);
      //if item is equal to callback, break loop
    } else {
      break;
    }
  }
  return newArray;
};

module.exports = takeUntil;