/*const square = function(x) {
  return x * x;
};

console.log(square(3));

const squareArrow = x => {
  return x * x;
};

const squareArrow = x => x * x;

console.log(square(8));
*/

// Challenge - Use Arrow Functions
// Get First Name('Mike Smith') -> 'Mike'

//1. Create regular arrow function
//2. Create arrow function using shorthand syntax

const getFirstName = fullName => {
  return fullName.split(" ")[0];
};

const getFirstName = fullName => fullName.split(" ")[0];
