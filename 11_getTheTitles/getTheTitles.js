const getTheTitles = function(books) {
  let solution = [];
  const booksTitles = books.map(element =>
    solution.push(element.title));
  return solution;
};

/*const getTheTitles = function(array) {
  return array.map(book => book.title);
};
*/
// Do not edit below this line
module.exports = getTheTitles;
