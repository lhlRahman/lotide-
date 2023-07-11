const findKeyByValue = function(obj, find) {
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === find) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;


