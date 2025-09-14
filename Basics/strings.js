const name = "prakriti"
const repoCount = 50
// console.log(name + repoCount + "Value"); //but now it is not the most effective way to write this way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // also known as string interpolation

const gameName = new String('prakriti-pb-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4)
// console.log(newString);


// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // trim() can also be used with /n

const url = "https://prakriti.com/prakriti%20bhatt"  // mostly when there is space b/w the words, %20 are used for the computer's understanding

console.log(url.replace('%20', '-')) 
console.log(url.includes('sundar'))  //includes() checks if the substring exists in the string.
console.log(gameName.split('-'));  //split('-') splits the string wherever '-' is found.
 



