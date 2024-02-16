const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

assertObjectsEqual({ name:"jeff", age: 37}, { name:"jeff", age: 37}); // should pass
assertObjectsEqual({ name:"jeff", age: 37}, { name:"jeff", age: 38}); // should fail
assertObjectsEqual({ name:"jeff", age: 37, hobbies: ["coding", "reading"]}, { name:"jeff", age: 37, hobbies: ["coding", "reading"]}); // should pass
assertObjectsEqual({ name:"jeff", age: 37, hobbies: ["coding", "reading"]}, { name:"jeff", age: 37, hobbies: ["coding", "gaming"]}); // should fail



