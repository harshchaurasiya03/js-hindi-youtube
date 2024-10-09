// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 36546378928376323n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj=
{
    name:  "harsh",
    age: 24
}



const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

