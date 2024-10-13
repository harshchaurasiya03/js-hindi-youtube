const user = {
    username: "harsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);   
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "harsh"
//     console.log(this);
    
// }

// chai()

// const chai = function(){
//     let username = "harsh"
//      console.log(this.username);
// }

const chai = () => {
    let username = "harsh"
     console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 

// const addTwo = (num1, num2) =>  num1 + num2 

// const addTwo = (num1, num2) =>  (num1 + num2)  

const addTwo = (num1, num2) => ({username: "harsh"})   


console.log(addTwo(3, 4));



// const myArray = [2, 5, 6, 8, 2]

// myArray.forEach()