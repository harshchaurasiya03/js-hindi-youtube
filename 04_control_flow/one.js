// if

// const isUserLoggedIn = true
// const temperature = 70

// if (temperature < 50) {
//     console.log("less than 50");
// }else{
// console.log("temperture is greater than 50");
// }
// console.log("Execute");


// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);   
// }

// console.log(`user power: ${power}`);


// const balance = 1000

//  if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 750");
    
// }else if (balance < 900){
//     console.log("less than 900");
    
// }else if (balance < 1200){
//     console.log("less than 1200");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy courses");
    
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}