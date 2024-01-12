const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//testing that given equal arrays, returns true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//testing that given different arrays, returns false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
//testing that given string array returns true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
//testing that given a string vs a numbre in otherwise same array returns false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
//testing that given a blank array and an array with values returns false
assertEqual(eqArrays([], [1, 2, 3]), false);
// testing that given 2 blank arrays returns true
assertEqual(eqArrays([], []), true);
