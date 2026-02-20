let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);       
    }
}

Object.prototype.Prakriti = () =>{
    console.log("Prakriti is present in all objects");   
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.Prakriti()
// myHeros.Prakriti()
// myHeros.heyHitesh()
// //heroPower.heyHitesh()