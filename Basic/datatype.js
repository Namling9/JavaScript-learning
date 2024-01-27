// There are two types of data type in javascript


// 1) Primitive Data type 

// String, Number, BigInt,symbol, null, undefined, Boolean

// symbol

 let a = Symbol("12345");
 console.log(a); // symbol(12345)
 console.log(typeof a); // symbol

 // BigInt

 let b = 2239832947283478927434793294n;
 console.log(b); //2239832947283478927434793294n
 console.log(typeof b); //bigint

 // null

 let c = null;
 console.log(c); // null
 console.log(typeof c); // Object

 // Undefined
  
 let d;
 console.log(d); // undefined
 console.log(typeof d); // undefined


 // 2) Non primative data type

 // Function, object, array

 // Array

 let colors = ["red", "green", "black","gray"];
 console.log(colors); // ["red", "green", "black","gray"]
 console.log(typeof colors); //object

 // Object

  let student = {
    name: "Namling", 
    semester: "4th Semester",
    Faculty: "BCA",
    College: "GoldenGate International College"
  }

   console.log(student); /* {
    name: "Namling", 
    semester: "4th Semester",
    Faculty: "BCA",
    College: "GoldenGate International College"
  }*/

   console.log(typeof student); // Object

   // Function

   function sum(a,b) {
    
    return a+b;
   }

   console.log(sum(5,5)); // 10
   console.log(typeof sum); // Function

   /* primitive data types are generally stored on the stack, while objects, 
   including primitive data types that are part of an object, are stored on the heap.
    The stack and the heap are both important parts of the computer’s memory, and 
    they serve different purposes in the execution of a Java program.

*/