const add = function(...args) {
	return args.reduce((previous, current) => {
    return previous + current;
  })
};

const subtract = function(...args) {
	return args.reduce((previous, current) =>
  previous - current);
};
//add function has numbers as input while sum receives
//an array

const sum = function(array) {
  return (array.length === 0) ? [] : array.reduce((previous, current) => previous + current);
}
//to reduce it, an array must have an initial value


const multiply = function(...args) {
 return args.reduce((previous, current) => previous * current);
};

const power = (...args) => args.reduce((current, present) => current ** present);

const factorial = function(nr) {
  if (nr === 0) return 1;
  else {
    let result = 1;
	  for(let i = 1; i <= nr; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
