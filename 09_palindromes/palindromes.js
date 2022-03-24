const palindromes = function (string) {
    const stringSimplified = string.replace(/\W/g, '')
                                        .toLowerCase();
    let outputString = '';
    for (let i = stringSimplified.length - 1; i >= 0 ; i--) {
      outputString += stringSimplified[i];
    }
   return (stringSimplified === outputString) ? true : false;
}
/*
const palindromes = function (string) {
  const processedString = string.toLowerCase().replace(/\W/g, '');
  return (processedString.split('')
                         .reverse()
                         .join('') == processedString
         );
};
*/

// Do not edit below this line
module.exports = palindromes;
