const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");


// Test case 1: Array with odd length
const arr1 = [1, 2, 3, 4, 5];
const expected1 = [3];
const actual1 = middle(arr1);
assertArraysEqual(actual1, expected1);

// Test case 2: Array with even length
const arr2 = [1, 2, 3, 4];
const expected2 = [2, 3];
const actual2 = middle(arr2);
assertArraysEqual(actual2, expected2);

// Test case 3: Array with length less than 3
const arr3 = [1];
const expected3 = [];
const actual3 = middle(arr3);
assertArraysEqual(actual3, expected3);

// Test case 4: Empty array
const arr4 = [];
const expected4 = [];
const actual4 = middle(arr4);
assertArraysEqual(actual4, expected4);
