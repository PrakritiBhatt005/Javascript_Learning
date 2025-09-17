function addTwoNumbers (num1, num2){  //num1 and num2 are the parameters
    console.log(numi + num2);
}

const result = addTwoNumbers (5,9); // S and 9 are the arguments
console.log("Result: ", result); //will give output as undefined, why? refer to function addTwoNumbers2


function addTwoNumbers2 (num1, num2){
    //let result num1 num2;
    //return result;
    return num1+num2;
}

console.log("prakriti"); // after return statement no further code is accessible, so this won't get printed

const result2 = addTwoNumbers2(2,3);

console.log("Result: ", result2);

function loginUserMessage(username = "Sons"){
    if(lusername){     //also can be written es username === undefined
        return console.log("Please enter a username.");
    }
    return "${username} just logged inl"; //string interpolation
}
console.log(loginUserMessage("Prakriti Bhatt"));
console.log(loginUserMessage()); // interesting output, gåves "undefined just logged in'

function calculateCartPrice(...numl){  // is both spread and rest operator but both serves opposite purpose 
    return num1;
}
console.log(calculateCartPrice(106,208,300));

function calculateCartPrice2 (vall, val2,...num1){
    return num1;              //... is both spread and rest operator but both serves opposite purpose
}

console.log(calculateCartPrice2(100, 200, 300, 500, 1000));
const user={
    username: "prakriti",
    age: 23
};

function handleObject(anyobject){
console.log("Username is $(anyobject.username) and the age is $(anyobject.age}");
}

//handleObject(user);

// directly also an object can be passed in the function as an argument


// username: "bhatt",

// handleObject({

// age: 22

// });

const myNewArray = [100, 200,9900];

function returnArrayValue(getArray) {
    return getArray[1];
};
console.log(returnArrayValue(myNewArray));