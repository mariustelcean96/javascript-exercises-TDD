const findTheOldest = function(obj) {
    const sortedPeople = obj.sort((a,b) => 
    a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1);
    return sortedPeople[0];
   };

// Do not edit below this line
module.exports = findTheOldest;
