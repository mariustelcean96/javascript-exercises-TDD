const sumAll = function(startNum, endNum) {
  let sum = 0;
  if (startNum < 0 || endNum < 0) {
    return 'ERROR';
  } else if (typeof(startNum) !== 'number' || typeof(endNum) !== 'number') {
      return 'ERROR';
  } else if (startNum > endNum) {
      for (let i = endNum; i <= startNum; i++) {
        sum += i;
      }
  } else if (startNum < endNum) {
      for (let i = startNum; i <= endNum; i++) {
        sum += i;
      }
    }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
