const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");
assertEqual(words.length, 3);
const moreWords = ["More"];
const mostWords = [];
assertEqual(tail(moreWords).length, 0);
assertEqual(tail(mostWords).length, 0);