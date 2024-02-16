const countOnly = function(allItems, itemsToCount) {
  //create object to contain final counts
  let results = {};
  //loop each item of allItems object
  for (const item of allItems) {
    //check if current item is in itemsToCount object
    if (itemsToCount[item]) {
      //add current item to results object if it isn't there already, increase count by one if it is
      results[item] = (results[item] || 0) + 1;
    }
  }
  //return results object with final counts
  return results;
};

module.exports = countOnly;
