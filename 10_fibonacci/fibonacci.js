const fibonacci = function(string) {
  let number = parseInt(string);
  if(number < 0) return 'OOPS';
  let result = [];
  for(let i = 0; i <= number; i++) {
    if (i === 0) {
      result.push(0);
      continue;
    }
    if (i === 1) {
      result.push(1);
      continue;
    } else {
        result.push(result[i - 1] + result[i - 2]); 
    }
  }
    return result[number];
};
// Do not edit below this line
module.exports = fibonacci;