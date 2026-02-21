// this keyword concept
const user = {
    username : "Prakriti Bhatt",
    loginCount: 8,
    signedIn: true,
    getUserDetails : function(){
        console.log("Got user details from the database");
        console.log(`Username is:", ${this.username}`);      
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);          //this...this is different from the above one..both gives different output

function User(username, loggedInCount, isLoggedIn){
    this.username = username;
    this.loggedInCount = loggedInCount;
    this.isLoggedIn = isLoggedIn;
    return this
}
const userOne = new User("Prakriti", 2, true)  //new is the constructor function
const userTwo = new User("Vanshaj", 4, true)  //without you the value of userOne get overwritten by the userTwo
console.log(userOne);
console.log(userOne.constructor);   //constructor is a built-in keyword
console.log(userTwo);


