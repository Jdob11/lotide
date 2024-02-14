const tail = function(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  };
  
  return arr.slice(1);
};

module.exports = tail;