class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}praks`
    }
    set password(value){
        this._password = value
    }
}

const userOne = new user("pk@gmail.com","abc")

console.log(userOne.email);

