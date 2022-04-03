const findTheOldest = function(array) {
    const sortedPeople = array.sort(function (a,b) {
        if (!a.yearOfDeath || !b.yearOfDeath) {
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

/*
const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = retrieveAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = retrieveAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};

function retrieveAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}
*/
// Do not edit below this line
module.exports = findTheOldest;
