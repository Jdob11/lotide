//function to return first key that matches callback value
const findKey = function(object, callback) {
  for (const key in object) {
    const value = object[key];
    const result = callback(value);
    //if callback returns true, return current key
    if (result) {
      return key;
    }
  }
}

module.exports = findKey;
