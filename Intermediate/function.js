// Functiion

/* A JavaScript function is a block of code designed to perform a particular task.
 It can be called anywhere in your program and can help make your code more modular and reusable.
 Functions can take in parameters, which are values that are passed into the function when it is called.  */

 function greeting(name) {
    
    console.log(`Hello ${name}`);
 }

 // greeting("Namling"); // Hello Namling

function sum( num1, num2){

    return num1+num2;
}

console.log(sum(2,3)); // 5


// rest operator

function number(...num){

    console.log(...num); // 2000 300 4000 30 4923 24
    
    console.log(num); // [2000 300 4000 30 4923 24]
}

number(2000,300,4000,30,4923,24);


// Object in function

 let user = {

     userName : "Namling",
     Job : "Data Scientist"
 }

 function objecthandler(anyObject){

    console.log(` Name is ${anyObject.userName} and He is a ${anyObject.Job}`); // Name is Namling and He is a Data Scientist
 }

 objecthandler(user); // calling function with the parameter object


 // Array in funtion

  let myArr = [2,3,5,6,"four","1000"];

  function arr(anyArray) {
    
    console.log(anyArray); //[ 2, 3, 5, 6, 'four', '1000' ]
  }

  arr(myArr);

  // Constructor Function

  function employee(name,age,job,level) {
    
    this.name = name;
    this.age = age;
    this.job = job;
    this.level = level;
     
  }

   const employee1 = new employee("Namling", 20, "Data scientist", "intern");

   console.log(employee1); /* employee {
    name: 'Namling',
    age: 20,
    job: 'Data scientist',
    level: 'intern'
  } */