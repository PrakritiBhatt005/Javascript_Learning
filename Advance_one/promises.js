const PromiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Aysnc Task 1 completed");
        resolve()                        // resolve() to connect resolve and then
    }, 1000);
})

PromiseOne.then(function(){
    console.log("PromiseOne consumed");   
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Aysnc Task 2 completed");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise 2 consumed");    
})