/* A variable in JavaScript is a named memory space used to store a value 
   that can be utilized during program execution.
   It has a name, a value, and a memory address. */

/*The const keyword in JavaScript is used to declare constant variables.
 A constant variable is a variable whose value cannot be changed. */

 //String datatype
const Name = "Namling Limbu";

/*The let keyword in JavaScript is used to declare a variable that is block-scoped. 
This means that the variable exists only within the block, statement,
 or expression where it is declared, as well as in any sub-blocks contained within it. */

 // Integer/Number datatype
let age = 20;

/* The var keyword in JavaScript is used to declare a variable.
it is function-scoped or globally-scoped,
 which means that if it is declared within a function,
  it can only be accessed within that function, 
  but if it is declared outside of any function, it can be accessed globally. */

  // Boolean datatype.
  var isStudent = true;

  // Float datatype

  let height = 5.7;

  //Undefined: A variable that has not been assigned a value has the type “undefined”. 

  let networth;
  console.log(networth); // undefined;


  /*Null: The null type has only one value null. It represents the intentional absence of any object value. However, 
  the typeof operator in JavaScript returns “object” when used with the null value, which is a known bug. */

  let obj = null;
  console.log(typeof obj); //null

  // But if you put + or - sign before null value it will return 0
  
  let obj1 = -null;
  console.log(obj1); // -0

  let obj2 = +null;
  console.log(obj1); // 0

