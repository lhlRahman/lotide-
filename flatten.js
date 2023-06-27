// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line no-unused-vars
const assertArraysEqual = function(arrOne, arrTwo) {
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i ++) {
      if (arrOne[i] !== arrTwo[i]) {
        console.log(`🛑🛑🛑Assertion Failed: "${arrOne}" !== "${arrTwo}"`);
        break;
      } else if (i === arrOne.length - 1) {
        console.log(`✅✅✅Assertion Passed: "${arrOne}" === "${arrTwo}"`);

      }
    }
    
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${arrOne}" !== "${arrTwo}"`);
  }
};

const flatten = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  
  return result;
};

// Test Code
// Example usage
const arrayToFlatten = [1, 2, [3, 4,1,1,1,2,2,3,22,32,3,23,2,], 5, [6]];
const flattenedArray = flatten(arrayToFlatten);
console.log(flattenedArray);
