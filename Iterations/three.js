//for of
// ["", "", ""]
// [{}, {}, {}] declaring multiple object

const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);  
}
const greetings = "Hello Prakriti";
for (const greet of greetings) {
    console.log(greet); 
}

//---MAPS--

const map = new Map();
map.set('IND',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");
map.set('IND',"India");
//console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);    
}

//--Object-- (for object forof loop doesn't work in this case)
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }