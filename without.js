const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }

  return true;
};

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
console.log(without([1, 2, 3], [1]));
console.log(without([1, 2, 3, 45], [45, 2]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(eqArrays(words, ["hello", "world", "lighthouse"]));
