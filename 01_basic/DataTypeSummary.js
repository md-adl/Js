// Primitive Data Types and Non Primitive Data type


// # 7 Primitive data types in javascript
// All are call by value
// Number , boolean ,String, null, undefined,symbol, Bigint

// const score = 100;
// const isLoggedIn = false;
// const outside = null;
// const id = Symbol('123');
// const anotherid=Symbol('123');
// console.log(id === anotherid);

// Reference(Non primitive)

//Array, Objects, Function

const heroes = ['shakitiman',"naagraj", "doga"];
let myObj = {
    name:"Adil",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}


// **********Meomrey********///


// stack(primitive), Heap(Non-primitive)

// let myYoutubename = "codingEra";

// let anotherName = myYoutubename;
// console.log(anotherName);

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;
userTwo.email = "mdadil@google.com";
console.log(userTwo.email);
console.log(userOne.email);