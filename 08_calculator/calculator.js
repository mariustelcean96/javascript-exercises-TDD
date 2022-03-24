const add = function(...args) {
	return args.reduce((previous, current) => {
    return previous + current;
  })
};

const subtract = function(...args) {
	return args.reduce((previous, current) =>
  previous - current);
};
//add function receives numbers while sum receives an array

const sum = (array) => array.length ? array.reduce((previous, current) => previous + current) : [];

//NB! to reduce it, an empty array must have an initial value

const multiply = (array) => array.length ? array.reduce((previous, current) => previous * current) : [];

const power = (...args) => args.reduce((previous, current) => Math.pow(previous, current));

/*const factorial = function(nr) {
  if (nr === 0) return 1;
  else {
    let result = 1;
	  for(let i = 1; i <= nr; i++) {
      result *= i;
    }
    return result;
  }
};*/

const factorial = function(number) {
  if (!number) return 1;
  else {
    return number * factorial (number - 1); // 'factorial' <-> n! = n * (n-1)!
    //to write this I had to check the solutions on TOP page
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
