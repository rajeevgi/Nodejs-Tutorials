// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function product(a, b){
//     return a * b;
// }

// function division(a, b){
//     return a / b;
// }

// Exports Using Objects    // This is a best practice
// module.exports = {
//   Sum: add(2, 3),
//   Difference: subtract(3, 1),
//   Multiple : product(2, 3),
//   Div : division(4,2)
// };


// Using Anonymous Functions
exports.add  = (a , b) => {
    return a + b;
}

exports.subtract = (a , b) => {
    return a - b;
}

exports.product = (a , b) => {
    return a * b;
}

exports.division = (a , b) => {
    return a / b;
}

