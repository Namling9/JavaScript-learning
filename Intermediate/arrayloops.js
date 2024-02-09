// For of loop

let arr = [2,35,6,732,56,"hello"];

for( const num of arr){

  //  console.log(num); 

  /* 2
     35
     6
     732
     56
     hello */

}

const greeting = "Hello World";

for( const greet of greeting){

   if ( greet==" "){

    break;
   }
   // console.log(greet); 

/* H
   e
   l
   l
   o */
}


for( const greet of greeting){

    if ( greet==" "){
 
     continue;
    }
   //  console.log(greet); 
   
                         /* H
                            e
                            l
                            l
                            o
                            W
                            o
                            r
                            l
                            d */

        

}

// maps

const mymap = new Map();

mymap.set("IND", "India")
mymap.set("NEP", "Nepal")
mymap.set("UK", "United Kingdom")

//console.log(mymap); //Map(3) { 'IND' => 'India', 'NEP' => 'Nepal', 'UK' => 'United Kingdom' }

for( const key of mymap){

  // console.log(key);
                    /* [ 'IND', 'India' ]
                        [ 'NEP', 'Nepal' ]
                        [ 'UK', 'United Kingdom' ] */
}

for( const [key1, value] of mymap){

   console.log(key1," :- ",value);

   /* IND  :-  India
NEP  :-  Nepal
UK  :-  United Kingdom */
}


// In object (for of) loop doesn't work
 
const obj = {

    name : "Namling",
    age : 20

}

/* for( const value of obj){

   // console.log(value); // obj is not iterable
}
 */

// For in loop

 const myobj = {
       js : "Javascript",
       py : "Python",
       cpp : " C++",
 }

 for( const key in myobj){

   /*console.log(key); /* js
                        py
                        cpp */
  
 /* console.log(myobj[key]); /* Javascript
                               Python
                                C++ */

  /* console.log(`${key} : ${myobj[key]}`); /* js : Javascript
   py : Python
   cpp :  C++
    */
 }

// For in array 

 const arr1 = [1,34,56,6732,5,312,4];

 for (const key in arr1) {
  
      // console.log(key); // ( it prints the index of array element like 0,1,2,3,4,5,6)

      /* console.log( arr1[key]); /*1
       34
       56
       6732
       5
       312
       4 */
   }
 


   // For each loop 

   const lang = ["js","C", "python", "Java", "Rust"];

   lang.forEach( (langname) => {
       
   /*   console.log(langname); /* js
      C
      python
      Java
      Rust */
   })

   // For each loop 

   function language(i) {
      
    //  console.log(i);
   }

   /* lang.forEach(language); /* js
   C
   python
   Java
   Rust */


   // For each in array with object

    const programminglang = [
      
      {
       name: "Javascript",
       fileName : ".js"
    },
           {
            name : "Java",
            fileName : ".java"
           },

           {
             name : "Python",
             fileName : ".py"
           }
   ]

   programminglang.forEach( (item) => {

    //  console.log(item);  
      /* { name: 'Javascript', fileName: '.js' }
{ name: 'Java', fileName: '.java' }
{ name: 'Python', fileName: '.py' } */

 // console.log(item.name); 

  /* Javascript
Java
Python */
   })

