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

//Test Code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]