// singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "Prakriti",
    "full name" : "Prakriti Bhatt",
    [mySym] : "mykey1",
    age: 23,
    location: "Noida",
    email: "prakritibhatt@google.com",
    isLoggedIn: false,
    lastloggedIndays : ["Monday", "Tuesday", "Wednesday"]
};
console.log(JsUser.email);  //more preferred way
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);  // this is how you use the syntax for Symbol

// JsUser.email = "prakriti@chatgpt.com"
// //Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
};

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
    
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

