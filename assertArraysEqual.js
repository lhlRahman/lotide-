
const eqArrays = function(arrOne, arrTwo) {
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
// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

