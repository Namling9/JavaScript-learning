// this keyword

// this keyword refer to current value/context of variable

let obj = {

     name : "Namling",

     welcomeMessage: function (){
        
        console.log(`${this.name}, Welcome to the website`);
     }
}

obj.welcomeMessage(); // Namling, Welcome to the website
obj.name = "Sam";
obj.welcomeMessage(); // Sam, Welcome to the website


function one(){

    let username = "namling"

   // console.log(this.user); // Undefined
}
one(); 

// Arrow function

const arrow = ()=>{

    console.log(this); // {}
    console.log("This is an arrow function"); // This is arrow function
}

arrow(); 


const sum = ( num1, num2) => (num1 + num2);

console.log(sum(5,5)); // 10

// Object inside arrow function

const name = () => ({username:"namling"})

console.log(name()); // { username: 'namling' }