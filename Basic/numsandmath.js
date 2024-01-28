// Numbers

let a = "10"
let b = Number(a);

console.log(b); //10 
console.log(typeof b); // number

// object number

let c = new Number(10);
console.log(c); // [ number : 10 ]
console.log(typeof c); // Object

// tofixed

let price = 200;
console.log(price.toFixed(2)); // 200.00

// tolocalstring()

let hundreds = 10000000;
console.log(hundreds.toLocaleString()); //10,000,000

// ************************** MATH *********************************

console.log(Math.abs(-1)); // 1 ( Absolute)

console.log(Math.PI); // 3.14

console.log(Math.round(4.6)); //5

console.log(Math.ceil(4.2)); //5 (top value)

console.log(Math.floor(4.9)); // 4 (Low value)