//this function gives the middle most element or elements of a given array
const middle = function(arr) {
  const length = arr.length;
  //returns an empty array if there are less than 2 elements
  if (length <= 2) {
    return [];
  }
  //finds the middle index of an array and rounds to the nearest whole number
  const middleIndex = Math.floor(length / 2);
  //returns the two middle most elements in an even array
  if (length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    // returns single middle element for an odd  numbered array
    return [arr[middleIndex]];
  }
};

module.exports = middle;

