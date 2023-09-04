// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let muCreatedDate = new Date(2023, 0, 23); // 0 mean January
// console.log(muCreatedDate.toDateString());
// console.log(muCreatedDate.toLocaleString())
// let muCreatedDate = new Date(2023, 0, 23,5,3); // 0 mean January
// console.log(muCreatedDate.toLocaleString());

const myCreatedDate = new Date("01-12-2023");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();// it gives milisecond from 1 jan 1970
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000)) // it gives second

// const newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours())



