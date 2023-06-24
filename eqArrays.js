// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${actual}" !== "${expected}"`);
  }

};
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i ++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS