/* Data type conversion in JavaScript refers to the process of changing data from one type to another.

There are two types of type conversion in JavaScript: implicit and explicit.

*/

/*
Implicit type conversion, also known as automatic type conversion, occurs when JavaScript automatically
 converts data types in certain situations. 
For example, when a number is added to a string,
 JavaScript converts the number to a string before concatenation.  */


let result1 = '3' + true;  
 console.log(result1); // "3true"

 /* The typeof operator in JavaScript is a unary operator that returns a string indicating the data type of the operand.
  The operand can be of any type, such as a number, string, boolean, object, function, or undefined. */

 console.log(typeof(result1)); //String

let result2 = '3' + undefined; 
 console.log(result2); // "3undefined"

 console.log(typeof(result2)); //String


let result3 = '3' + null;  // "3null"
console.log(result3); // 

 console.log(typeof(result3)); //String


let result4 = '3' + 2;  // "32"
console.log(result3); // 

 console.log(typeof(result3)); //String


/* Explicit type conversion, also known as type casting, occurs when you manually convert data types as per your needs. */

 let result = "A+";
 let rconver = Number(result);
 console.log(rconver); // NaN ( Not a Number)
 console.log(typeof rconver); // Number

 let score = 50;
 let sconver = score.toString(); // String(score);
 console.log(sconver); // 50
 console.log(typeof sconver); //string

 let number = 1; //let a = "heoibaf" 
 let nconv = Boolean(number); 
 console.log(nconv); // true  
console.log(typeof nconv); //Boolean

let number1 = 0; //let a = "" 
 let nconv1 = Boolean(number); 
 console.log(nconv); // false
console.log(typeof nconv); //Boolean