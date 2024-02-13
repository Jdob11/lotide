const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const arrayTest1 = middle([1, 2, 3, 4, 5]);
assertArraysEqual(arrayTest1, [3]);

const arrayTest2 = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(arrayTest2, [3, 4]);

const arrayTest3 = middle([1, 2]);
assertArraysEqual(arrayTest3, []);

const arrayTest4 = middle([]);
assertArraysEqual(arrayTest4, []);

middle("Banana");
