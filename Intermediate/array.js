//Array 

/*An array in JavaScript is a data structure that allows you to store
 and organize multiple values within a single variable. 
 It is a versatile and dynamic object that can hold various data types,
 including numbers, strings, objects, and even other arrays.*/

 /*Arrays in JavaScript are zero-indexed,
  meaning the first element is accessed with an index of 0,
   the second element with an index of 1, and so forth.m*/

   let arr = [1,2,3,"four",5.0,"six",];

   console.log(arr[0]); // 1
   console.log(arr[3]); // four

 let myarr = [ "A", arr];

 console.log(myarr); // [ 'A', [ 1, 2, 3, 'four', 5, 'six' ] ]


 // method

 // Includes this method checks wether the element included in array or not

 console.log(arr.includes(9));// false

 // slice 
 // Slice() method print the deep copy / copy of array of the given index.

 console.log(arr.slice(0,4)); //[ 1, 2, 3, 'four' ]
 console.log(arr); // [1,2,3,"four",5.0,"six",]

 // splice
 // Splice() method print the shallow copy or make changes in reference value or real value of array.

 console.log(arr.splice(0,4)); //[ 1, 2, 3, 'four' ]
console.log(arr); // [ 5, 'six' ]


// Index0f()
// IndexOf() method shows that in which index the given element lies in .

let arr3 = [1,2,4,5,6,7,8,8];

console.log( arr3.indexOf(8)); // 6 ( Because the first 8 can be found in the 6th index of the array).