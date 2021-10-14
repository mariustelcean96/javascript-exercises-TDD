const leapYearsArray = function(year) {
  let err = 0;
  let leap = 0;
  for (let i = 0; i < year.length; i++) {
    if (year[i] % 4 === 0) {
      if (year[i] >= 400 && year[i] % 100 === 0) {
        if (year[i] % 400 === 0) {
          leap++;
        } else {
          err++;
        }   
      } else if (year[i] >= 400 && year[i] % 100 !==0 && year[i] % 400 !== 0) {
          leap++;
      } else if (year[i] < 400 && year[i] % 100 !== 0) {
          leap++;
      } else {
          err++
      }
    } else {
        err++;
    }
   }
     return err++;
}
// Do not edit below this line
module.exports = leapYearsArray;
