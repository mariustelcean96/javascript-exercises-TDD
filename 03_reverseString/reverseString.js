const reverseString = function(str) {
  let outputString = '';
  for (let i = str.length - 1; i >= 0 ; i--) {
    outputString += str[i];
  }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
