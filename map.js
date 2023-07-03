const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i ++) {
      if (arrOne[i] !== arrTwo[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: "${arrOne}" !== "${arrTwo}"`);
        break;
      } else if (i === arrOne.length - 1) {
        console.log(`✅✅✅ Assertion Passed: "${arrOne}" === "${arrTwo}"`);
      }
    }
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${arrOne}" !== "${arrTwo}"`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

// Test Case 1: Extracting the lengths of words
const expected1 = [6, 7, 2, 5, 3];
const results1 = map(words, word => word.length);
eqArrays(results1, expected1);

// Test Case 2: Converting words to uppercase
const expected2 = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
const results2 = map(words, word => word.toUpperCase());
eqArrays(results2, expected2);

// Test Case 3: Doubling the numbers
const expected3 = [2, 4, 6, 8, 10];
const results3 = map(numbers, num => num * 2);
eqArrays(results3, expected3);
