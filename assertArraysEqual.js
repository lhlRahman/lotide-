const assertArraysEqual = function(arrOne, arrTwo) {
  let assertionPassed = true;

  if (arrOne.length !== arrTwo.length) {
    assertionPassed = false;
  }

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      assertionPassed = false;
    }
  }

  if (assertionPassed) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};

module.exports = assertArraysEqual;

