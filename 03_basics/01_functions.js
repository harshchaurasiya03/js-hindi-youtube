function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

//sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);    
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Harsh"));
//console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 300, 500));

const user ={
    username: "harsh",
    price: 199
}

function handleObject(anyobject){

    console.log(`Username is ${anyobjec.username} and price is ${anyobject.price}`);
    
}

handleObject(user)

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
