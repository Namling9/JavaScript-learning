// Immediately Invoked Function Expression

/* 

An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.
 It is also known as a Self-Executing Anonymous Function.
 
 */

 // IFFE function

 ( function connect(){
    console.log("DataBase Connected"); //DataBase Connected
 }) ();

 // IFFE arrow function

 ( (name) => {
    console.log("Good night,", name); //Good night, Namling
 })("Namling");