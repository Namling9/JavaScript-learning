//Object

// Symbol

let key = Symbol("key5");

let user = {

    fullName : {
        userName:{
            firstName : "Namling",
            lastName : "Limbu"
        }
    },
        [key]: "key1",
    userId : 2000,
    Status: "Entry Level",
    Department : "Data Science"
}

console.log(user.fullName); //{ userName: { firstName: 'Namling', lastName: 'Limbu' } }


console.log(user.fullName.userName); //{ firstName: 'Namling', lastName: 'Limbu' }

console.log(user.fullName.userName.firstName); // Namling

console.log(user);


//spread object

let obj1 = { a:"1" , b:"2"};
let obj2 = {c:"3", d:"4"};

let obj3 = {...obj1, ...obj2};

console.log(obj3); // { a: '1', b: '2', c: '3', d: '4' };

// methods

console.log(Object.keys(obj1)); //[ 'a', 'b' ]
console.log(Object.values(obj1)); //[ '1', '2' ]
console.log(Object.keys(obj1).length); // 2