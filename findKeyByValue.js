//function to search object for given value and return key
const findKeyByValue = function(object, value) {
  //loop through object keys
  for (let key in object) {
    //check object value of current key matches the value given to function, return current key
    if (object[key] === value) {
      return key;
    }
  }

};

module.exports = findKeyByValue;