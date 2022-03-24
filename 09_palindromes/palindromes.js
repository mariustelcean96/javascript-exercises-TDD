const palindromes = function (inputString) {
    const inputStringReduced = inputString.replace(/\W/g, '')
                                          .toLowerCase();
    let outputString = '';
    for (let i = inputStringReduced.length - 1; i >= 0 ; i--) {
      outputString += inputStringReduced[i];
    }
    if (outputString === inputStringReduced) return true;
    else {
      return outputString;
    }
}
// Do not edit below this line
module.exports = palindromes;
