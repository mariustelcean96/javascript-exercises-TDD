const findTheOldest = function(array) {
    const sortedPeople = array.sort(function (a,b) {
        if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
            a.yearOfDeath = new Date().getFullYear();
            b.yearOfDeath = new Date().getFullYear();
        }
      if(a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
      return 1;
      } else {
      return -1;
      }
    });
    return sortedPeople[0];
   };

// Do not edit below this line
module.exports = findTheOldest;
