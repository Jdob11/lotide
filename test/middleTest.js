const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//testing that given an odd numbered array, the middle value is returned
assertArraysEqual(middle([1, 2, 3]), [2]);
//testing that given an equal number array, the two most middle values are returned
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
//testing that given a single value array, and empty array is returned
assertArraysEqual(middle([1]), []);
//testing that given an empty array an empty array is returned
assertArraysEqual(middle([]), []);
//testing that given a two value array an empty array is returned
assertArraysEqual(middle([1, 2]), []);