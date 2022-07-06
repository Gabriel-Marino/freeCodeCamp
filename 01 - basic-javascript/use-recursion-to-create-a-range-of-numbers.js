// v1.0
function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum, endNum-1);
    arr.push(endNum);
    return arr;
  }
};

// v2.0
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) return [startNum];

  const arr = rangeOfNumbers(startNum, endNum-1);
  arr.push(endNum);
  return arr;
};

console.log(rangeOfNumbers(1, 2))