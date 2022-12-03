// TS knows that age is of type number
let age = 6;

// Assigning a string to a variable of type number is not possible in TS
// age = 'asd';

// TS will define a const as a real constant variable, anotherAge will always be 6, this is called "Literal Type"
const anotherAge = 6;

function add(a: number, b: number) {
  return a + b;
}

// Both parameters are numbers, so the function accepts them
add(1, 3);

// The second parameter is a string therefore the function doesn't accept it
// add(1, '3');
