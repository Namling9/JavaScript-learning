

let myDate = new Date();

console.log(myDate.toDateString()); // Sun Jan 28 2024
console.log(myDate.toString()); // Sun Jan 28 2024 06:41:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()); //2024-01-28T06:41:24.357Z
console.log(myDate.toJSON());// 2024-01-28T06:41:24.357Z
console.log(myDate.toTimeString()); //06:41:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()); //1/28/2024, 6:41:24 AM
console.log(myDate.toUTCString()); //Sun, 28 Jan 2024 06:55:02 GMT

let myCreatedDate = new Date("2012-01-17");
console.log(myCreatedDate.toLocaleString()); //   1/17/2012, 12:00:00 AM

let myCreatedDate1 = new Date(2014,0,26,5,3);
console.log(myCreatedDate1.toLocaleString()); // 1/26/2014, 5:03:00 AM

console.log(myCreatedDate1.getTime()); // ( turns in milisecond) 1390712580000

let timestamp = Date.now();
console.log(Date.now()); // time rightnow in milisecond
console.log(timestamp); // same 

// change milisecond in second

console.log(Math.floor(timestamp/1000));


