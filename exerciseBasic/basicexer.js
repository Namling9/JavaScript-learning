/* 1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

//let day = new Date();
//let Today = day.getDay();
//
//console.log(Today);

//let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
//
//console.log(`Today is : ${daylist[Today]}`);
//
//let date = new Date();

//console.log(`Current time is : ${date.toLocaleTimeString()}`);

/* 3. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */


let Today = new Date();

let dd = Today.getDate();

console.log(dd);
let mm = Today.getMonth();


let yyyy = Today.getFullYear();

if( dd < 10){

    dd = 0 + dd;
}

if( mm < 10){
    mm = 0 + mm;
}

console.log(`${mm+1}-${dd}-${yyyy}`);
console.log(`${mm+1}/${dd}/${yyyy}`);

//4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let side1 = 5;
let side2 = 6;
let side3 = 7;

let s = (side1*side2*side3)/2;

console.log(s);

/*  Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.*/

function check( a, b){

    return (a == 50 || b == 50) ? (true) : (false);

}

console.log(check(50,25));
console.log(check(20,25));

// Write a JavaScript program to get the difference between 
// a given number and 13, if the number is broader than 13 return double the absolute difference.  

function diff( a ){
      
    let b = a-13;
     if( a == 13){

        console.log(a);
     }
     else if( b >= 13){

        console.log(b+b);
     }

     else{
         console.log(a-13);
     }
}

diff(13);
diff(40);
diff(20);