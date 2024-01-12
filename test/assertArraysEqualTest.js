const assertArraysEqual = require('../assertArraysEqual');

//testing given equal arrays returns true
assertArraysEqual([1, 2, 3], [1, 2, 3]);
//testing given different arrays returns false
assertArraysEqual([1, 2, 3], [3, 2, 1]);
//testing given equal string arrays returns true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
//testing given ssame array with different primitive value returns false
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
//testing given empty and full array retruns false
assertArraysEqual([], [1, 2, 3]);
// testing given two empty arrays returns true
assertArraysEqual([], []);