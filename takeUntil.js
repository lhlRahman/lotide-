const takeUntil = function(array, callback) {
  let arr = [];
  let i = 0;
  while (i < array.length) {
    if (callback(array[i])) {
      return arr;
    }
    arr.push(array[i]);
    i++;
  }
  return arr;
};

module.exports = takeUntil;