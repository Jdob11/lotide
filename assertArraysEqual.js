const assertArraysEqual = function(arr1, arr2) {
  //confirming arrays are an equal length
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  } else {
  //loop to compare that individual array elements are the same and break loop and give failed or passed based on result
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
        break;
      } else {
        console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
        break;
      }
    }   
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], []);