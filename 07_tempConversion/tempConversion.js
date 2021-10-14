const ftoc = function(degFahrenheit) {
  return Math.round(((degFahrenheit - 32) * 5/9) * 10) / 10;
};

const ctof = function(degCelsius) {
  return Number((degCelsius * 9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
