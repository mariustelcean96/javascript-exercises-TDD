const repeatString = function(message, num) {
   let value = '';  
   if (num < 0) {
     value = 'ERROR';
   }/* else if (message === '') {
       value = '';
   }*/ else {
       for (let i = 0; i < num; i++) {
         value += message;
       }
   }
  return value;
};

// Do not edit below this line
module.exports = repeatString;
