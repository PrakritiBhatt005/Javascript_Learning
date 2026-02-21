function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this,username)   // call is used so that it can be referenced to setUsername
    this.email = email
    this.password = password
} 

const user1 = new createUser("Prakriti Bhatt", "prakritibhatt@gmail.com","iamgood@123")
console.log(user1);
