const removeFromArray = function(arg1, ...arg2) {
  arg2.sort();
  for (let i = 0; i < arg1.length; i++) {
    for(let j = 0; j < arg2.length; j++) {
      if (arg1[i] === arg2[j]) {
        arg1.splice(i, 1);
      }
    }
  }
  return arg1;
};
// Do not edit below this line
module.exports = removeFromArray;
