const palindromes = function (inputString) {
let outputString = '';
for (let i = inputString.length - 1; i >= 0 ; i--) {
  outputString += inputString[i];
}
if (outputString === inputString) return true;
};

// Do not edit below this line
module.exports = palindromes;
