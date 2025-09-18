const user = {
    username : "Prakriti",
    age : 23,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website!`); // this refers to the current context   
    }
}
user.welcomeMessage();
