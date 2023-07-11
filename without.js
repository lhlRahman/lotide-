const without = function(arrMain, arrRemove) {
  let result = [];

  for (let i = 0; i < arrMain.length; i++) {
    let match = false;

    for (let j = 0; j < arrRemove.length; j++) {
      if (arrMain[i] === arrRemove[j]) {
        match = true;
        break;
      }
    }

    if (!match) {
      result.push(arrMain[i]);
    }
  }

  return result;
};

module.exports = without;