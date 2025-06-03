// const Math = require('./Math');   // Using variable
// const { Sum, Difference, Multiple, Div } = require('./Math');  // Using Destructure
const { add, subtract, product, division } = require('./Math');

// console.log('The Sum of Value of a & b is: ', Math.Sum);
// console.log('The Minus of Value of a & b is: ', Math.Difference); 
// console.log('The Product of Value of a & b is:', Math.Multiple);
// console.log('The Division of Value of a & b is:', Math.Div);

// console.log('The Sum of a and b is : ', Sum);
// console.log('The Minus of a and b is : ', Difference);
// console.log('The Product of a and b is : ', Multiple);
// console.log('The Division of a and b is : ', Div);

console.log('The Sum is : ', add(2,3));
console.log('The Minus is : ', subtract(3,1));
console.log('The Product is: ', product(4,3));
console.log('The Division is: ', division(6,2));
