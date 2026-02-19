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
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);          //this...this is different from the above one..both gives different output


