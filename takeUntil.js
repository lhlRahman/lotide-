const assertArraysEqual = function(arrOne, arrTwo) {
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: "${arrOne}" !== "${arrTwo}"`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: "${arrOne}" === "${arrTwo}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${arrOne}" !== "${arrTwo}"`);
  }
};

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

// Test Case 1: Testing with numbers
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expected1 = [1, 2, 5, 7, 2];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, expected1);

// Test Case 2: Testing with strings
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expected2 = ["I've", "been", "to", "Hollywood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, expected2);
