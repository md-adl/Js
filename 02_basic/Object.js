// singleton
// const muSym = Symbol("key1"); // how to use a key as 
// Object literals
// Object.create // another way to declare a object
// const JsUer = {
//     name : "Hitesh",
//     "full name":"Hitesh Choudhary",
//     [muSym]:"mykey1",
//     age: 18,
//     location:"jaipur",
//     email:"hitesh@google.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"]
// }

// console.log(JsUer.email)
// console.log(JsUer["email"])
// console.log(JsUer["full name"])
// console.log(JsUer[muSym]);
// console.log(typeof muSym);

// JsUer.email ="hitesh@chatgpt.com";
// console.log(JsUer);

// Object.freeze(JsUer);
// JsUer.email ="hitesh@microsoft.com";
// console.log(JsUer);

// JsUer.greeting = function(){
//     console.log("Hello Js USer")
// }

// JsUer.greetingTwo = function(){
//     console.log(`Hello js user ${this.name}`)
// }
// console.log(JsUer.greeting());
// console.log(JsUer.greetingTwo());


// const tinderUser = new Object(); // it is singleton
const tinderUser = {}
tinderUser.id ="123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regulaUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudahary"
        }
    }
}
console.log(regulaUser.fullname.userfullname.firstname);

const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"b"
}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1, ...obj2}

// const obj3 ={obj1,obj2}; wrong way
// console.log(obj3)

const user= [
     {
        id:1,
        email:"mdadil88040@gmail.com"
     }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


