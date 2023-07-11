const assertEqual = require("./assertEqual");

const countLetters = function(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (!(assertEqual(string.charAt(i), " "))) {
      const letter = string.charAt(i);
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;
