const tail = function(word) {
  let arr = [];
  if (word !== [] && word.length > 0) {
    for (let i = 1; i < word.length; i++)
      arr.push(word[i]);
  }

  return arr;

};

module.exports = tail;