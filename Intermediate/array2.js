

// push and pop method

let marvel = ["thor","spiderman", "Ironman", "Captain"];
let DC = ["Supeman", "Batman", "flash"];

marvel.push(DC); // Pushes element inside the array

console.log(marvel); // ["thor","spiderman", "Ironman", "Captain",  ["Supeman", "Batman", "flash"]]

marvel.pop(); // Pop out the last element of the array

console.log(marvel); // ["thor","spiderman", "Ironman", "Captain"]


// Concat

let heroes = marvel.concat(DC);

console.log(heroes); /* [
    'thor',
    'spiderman',
    'Ironman',
    'Captain',
    'Supeman',
    'Batman',
    'flash'
  ] */

  // Speard

  let newHeroes = [...marvel, ...DC];
  console.log("new heroes : ", newHeroes);


  // Flat 

  let nestedarr = [1,2,4,[4,5,6],7,8,[9,[10,11,12]]];

 let nestedarr2 = nestedarr.flat(Infinity);

 console.log(nestedarr2);   /* [
    1,  2, 4, 4,  5,
    6,  7, 8, 9, 10,
   11, 12
 ] */