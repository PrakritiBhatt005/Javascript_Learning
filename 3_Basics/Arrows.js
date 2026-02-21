const user = {
    username : "Prakriti",
    age : 23,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website!`); // this refers to the current context   
    }
}
user.welcomeMessage();
user.username = "Bhatt";
user.welcomeMessage();
//console.log(this);  //browser = global --> window, node --> empty object

function forThis(){
    let username = "praks";
    console.log(this);   //both console.log() statement gives different output
    console.log(this.username);    
    //*Note:* 'this' works differently inside an object and function, in function it cannot be used
}
forThis();

//----Arrow Function----
//basic Arrow Function
const addTwoNum = (num1,num2) => {
    return num1+num2;
}
console.log(addTwoNum(2,8));

//Implicit return Arrow Function
const addTwoNum2 = (num1,num2) => (num1 + num2); //feasible for one statement function, also, we use () when we don't want to write return keyword
console.log(addTwoNum2(1,8));

//For returning object
const addTwoNum3 = (num1,num2) => ({username : "bhatt"}); 
console.log(addTwoNum3(1,1));



