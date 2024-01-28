//String

// Primitive string

let name = "namling";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old`);

// Object String

let faculty = new String("Bachelor in Computer Application");

// Character access 
console.log(faculty[3]); //h
console.log(name[5]); // n 

// Character access with charAt() method/function.
console.log(name.charAt(3));// l
console.log(name.charAt(0)); // n


// String comparesion
let a = "a", b ="b";

if( a > b){

    console.log(a);
}
else if(b> a){
    console.log(b); // b is greater than a.
}
else{
    console.log("none");
}

if ( a == b) {
    console.log("yes");
}
else{
    console.log("no"); // no is the output.
}

// Uppercase and lowercase

console.log(name.toUpperCase()); // NAMLING
console.log(name.toLowerCase()); // namling

// slice

console.log(faculty.slice(0,15)); // Bachelor in com

// length

console.log(faculty.length);

// string concat

console.log(String.prototype.concat(name,age));//namling20

// tostring() method

let score = 100;
let score2 = score.toString()
console.log(score2); // 100
console.log(typeof score2); // String
console.log(typeof score); // number


let college = "GoldenGate International College"
console.log(college.substring(0,10)); //GoldenGate