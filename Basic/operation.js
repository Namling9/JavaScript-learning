/* Operators in JavaScript are symbols that perform operations on operands (values and variables). 
They are used to perform various actions such as arithmetic, comparison, logical, assignment, and more. */

// Arithmetic Operations

let sum = 5 + 5; //10
let sub = 6-4; // 2
let divide = 2/2; //1
let remainder = 2%3; // 1
let multiply = 2*2; // 4
let power = 2**3; // 8



/*Comparison Operators: 
These operators are used to compare two values and return a boolean value, either true or false. */

var a = 10;
var b = 20;

console.log(a == b); // false
console.log(a != b); // true
console.log(a === b); // false
console.log(a !== b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true

/* Logical Operators: These operators are used to perform logical operations and return a boolean value, either true or false */

var x = 5;
var y = 10;

console.log(x < 10 && y > 5); // true // && (AND Logical operator)
console.log(x > 10 || y < 5); // false // || (OR Logical Operator)
console.log(!(x == y)); //  true // ! ( NOT logical Operator)

// Assignment Operators: These operators are used to assign values to variables.

var x = 10;

x += 5; // x = x + 5
console.log(x); // 15

x -= 5; // x = x - 5
console.log(x); // 10

x *= 5; // x = x * 5
console.log(x); // 50

x /= 5; // x = x / 5
console.log(x); // 10

x %= 3; // x = x % 3
console.log(x); // 1

x **= 2; // x = x ** 2
console.log(x); // 1


// implicit Conversion

console.log(5 + 5); //10
console.log(5 + "5"); //55
console.log("5" + 5); //55
console.log(5 + 5 + "5"); //105
console.log("5" + 5 + 5); //555
console.log(5 + "5" + 5); //555