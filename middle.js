const middle = function(arr) {
  let result = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      result.push(Math.ceil(arr.length / 2));
      result.push(Math.floor(arr[arr.length / 2]));
      return result;
    }
    result.push(arr[Math.floor(arr.length / 2)]);
    return result;
  }
  return result;
};

module.exports = middle;