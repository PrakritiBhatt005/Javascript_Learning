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

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({                                 //inside resolve() object and array both can be declared
            user : "Prakriti",
            email : "prakritibhatt@gmail.com"
        });       
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
    
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({
            username : "Bhatt",
            password : "ok123"
        })
        }else{
            reject("Error: Something went wrong")
        }
    }, 1000)
})

PromiseFour.then((user)=>{                     //chaining (for more cleaner code)
    console.log(user);
    return user.username   
}).then((username)=>{
    console.log(username);    
}).catch((error)=>{
    console.log(error);    
}).finally(()=>{
    console.log("Promise is either resolved or rejected");        
})

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({
                username : "Javascript",
                password : "ok12345"
            })
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 1000)
});

async function consumePromiseFive(){   // when using async...await is also used
    try{
        const response = await PromiseFive
        console.log(response);        
    }catch (error){
        console.log(error);      
    }
}

consumePromiseFive()