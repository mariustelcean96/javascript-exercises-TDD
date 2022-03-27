const fibonacci = function() {
    let result = [];
    for(let i = 0; i <= 10; i++) {
    if (i === 0) {
    result.push (0);
    continue;
    }
    
    if (i === 1) {
    result.push(1);
    continue;
    
    } else {
        result.push(result[i - 1] + result[i - 2]); 
        }
    }
    console.log(result);

// Do not edit below this line
module.exports = fibonacci;