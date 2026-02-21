class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is; ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addUser(){
        console.log("A new user was added...");
        
    }
}
const userOne = new Teacher("Uno","uno@gmail.com","unn@123")
userOne.addUser()

userOne.logMe()
const userTwo = new User("Hina")

userTwo.logMe()

console.log(userOne instanceof User);
