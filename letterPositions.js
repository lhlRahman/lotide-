const letterPositions = function(sentence) {
  const results = {};
  let noSpace = [];

  for (let i = 0; i < sentence.length; i++) {
    noSpace.push(sentence.charAt(i));
  }

  for (let i = 0; i < noSpace.length; i++) {
    if (results[noSpace[i]]) {
      results[noSpace[i]].push(i);
    } else if (noSpace[i] !== " ") {
      results[noSpace[i]] = [i];
    }
  }

  return results;
};


console.log(letterPositions("lighthouse in the house"));

