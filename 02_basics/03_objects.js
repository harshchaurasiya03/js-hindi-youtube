// singleton
// Object.create


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Harsh",
    "full name": "Harsh chaurasiya",
    [mySym]: "mykey1",
    age: 23,
    location: "Delhi",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monaday", "Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);


JsUser.email = "harsh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "harsh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
