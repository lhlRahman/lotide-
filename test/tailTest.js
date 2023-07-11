const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {
  it("should not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

});
