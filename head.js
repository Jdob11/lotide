const head = function(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  };
  
  return arr[0];
};

module.exports = head;
