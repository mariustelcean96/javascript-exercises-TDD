const add = function(...arguments) {
	return arguments.reduce((previous, current) => {
    return previous + current;
  })
};

const subtract = function(...args) {
	return args.reduce((previous, current) =>
  previous - current);
};
//Is there any difference between
//add and sum functions?
const sum = function(...args) { 
	let sum = 0;
  for(let arg of args) {
    sum += arg;
  }
  return sum;
};

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
