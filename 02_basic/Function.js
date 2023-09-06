function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("L");
}
// sayMyName();

// function AddTwoNumber(num1, num2){
//      console.log(num1 + num2)
// }
// const result = AddTwoNumber(4,6)
// console.log(result);

// function addTwoNumber(num1, num2){
//     let result  = num1 + num2;
//     return result;
// }

// const result = addTwoNumber(3, 5);
// console.log("Result: ", result);

function loginUserMessage(username){
    // username ===undefined (!username)
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} welcome to our page`
}
console.log(loginUserMessage());