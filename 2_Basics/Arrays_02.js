const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] //more preferred way
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const new_another_array = another_array.flat(Infinity)
console.log(new_another_array);

console.log(Array.isArray("Prakriti"));
console.log(Array.from("prakriti"));
console.log(Array.from({name:"pbhatt"})); //interesting output
// Array.from() works only with iterables or array-like objects (having length and numeric indices).
// A plain object is neither iterable nor array-like → so Array.from({name:"pbhatt"}) gives [].

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));






