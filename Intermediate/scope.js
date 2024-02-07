// A variable declared outside of a function has a global scope, meaning it can be accessed from any part of the program.

var a = "Hello world"; // var is accessible from anywhere even from inside local scope.

let b = "hello"; // This is global scope and also access from inside function or local scope.

if(true){

    let eveing = "Goodeveing";

    var c = "hi";
  
   // console.log(b); // hello
   // console.log(a); // Hello world
}
// console.log(c); //hi
// console.log(eveing); // error eveing is not defined 

// local variable can't be access outside of local scope.



// Function scope


function one( ) {
    
  //  console.log("This is function one"); // This is function one

     let username = "Namling"

    

     function two( ) {
        
      //  console.log("This is function two"); // This is function two

        let website = " youtude"

      //  console.log( username + website); // Namling youtude
     }

  two(); // calling function two

  //   console.log(website); // website is not defined ( cause only child function can access the property of parent function )

}

one();

// console.log(username); // username is not defined ( because we can't access variable of local scope outside the local scope).


// Scope in if else

 

  if(true){

    let name = "Namling";

    if( name = "Namling"){

        let website = " Youtude";

      //  console.log( "This is child if statement", name + website); // This is child if statement Namling Youtude
    }

   //  console.log(website); // website is not defined ( Parent can't access the child property)
  }

  let name = "Namling";

  if(name){

  //  console.log(`Hello ${name}`); // Hello Namling
  }


  // Mini hoisting
 

  //one(10,20,30,40,50);

  function one(...num) {

    let result = null;

    for (let index = 0; index < num.length; index++) {
        
            result += num[index];

    }
    // console.log(result);
  }




  // sum(10,20,30,40,50); // Cannot access 'sum' before initialization

  const sum = function(...num) {
   
    let result = null;

    for (let index = 0; index < num.length; index++) {
        
            result += num[index];

    }
   // console.log(result);
  }
     
    let number = 10;

    if(true){
       console.log(number);
    }
