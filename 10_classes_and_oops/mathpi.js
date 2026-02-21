const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name : "ginger",
    price : 100,
    isAvailable : true,

    orderChai : function(){
        console.log("Chai not ready");       
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable : true,
    enumerable : true    //allows the property to be listed during object iteration; if false, the property is hidden from loops but still accessible directly.
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)){
    if (typeof value != 'function'){
        console.log(`${key}:${value}`);
        
    }
}
