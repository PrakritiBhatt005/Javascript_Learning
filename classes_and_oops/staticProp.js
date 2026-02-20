class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is:${this.username}`);
        
    }
    static creareID(){
        return `123`
    }
}

const prakriti = new User("bhatt")
//console.log(prakriti.creareID());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone 17 pro","iphone@icloud.com")
console.log(iphone.creareID());

