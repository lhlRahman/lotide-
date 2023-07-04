const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) { // Pass the value to the callback function
      return key;
    }
  }
  return undefined;
};

// Test case 1: Callback function returns true for the desired key
const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
const callback1 = x => x.stars === 2;
assertEqual(findKey(obj1, callback1), "noma");

// Test case 2: Callback function returns false for all keys
const obj2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 1 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 4 },
  "Akelarre": { stars: 3 }
};
const callback2 = x => x.stars === 2;
assertEqual(findKey(obj2, callback2), undefined);
