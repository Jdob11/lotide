const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
//comparing expected output length to actual
assertEqual(tail(words).length, 2);
//checking new index value at 0 is the original index value 1
assertEqual(tail(words)[0], "Lighthouse");
//checking new index value at 1 is the original index value 2
assertEqual(tail(words)[1], "Labs");
//confirming original array was not modified by tail
assertEqual(words.length, 3);
//confirming that when given one or no elements, an empty array is returned
const moreWords = ["More"];
const mostWords = [];
assertEqual(tail(moreWords).length, 0);
assertEqual(tail(mostWords).length, 0);