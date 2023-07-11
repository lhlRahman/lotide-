const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) { // Pass the value to the callback function
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;