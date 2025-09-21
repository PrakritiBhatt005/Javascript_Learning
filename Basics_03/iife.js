//Immediately invoked function expression
(function coffee(){
    console.log("Coffee Received!");
})();          //NOTE: to declare another iife make sure to end the 1st iife fucntion by applying ';'

((name) => {
    console.log(`Tea Received by ${name}`);  
})("Praks")