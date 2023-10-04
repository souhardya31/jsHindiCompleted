const marvel_heroes = ["thor", "IronMan", "spiderman"]

const dc_heroes = ["batman", "superman", "flash"]
const newArr = marvel_heroes + dc_heroes;
// console.log(newArr)
// console.log(marvel_heroes)

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// //since we can contain any Datatypes in js array, we see the dc_heroes gets added as an array

const allHeroes = marvel_heroes.concat(dc_heroes)//concat returns a new array, hence we have to assign it first
console.log(allHeroes);
console.log(marvel_heroes)

const allNewHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allNewHeroes);//... = spread operators


const another_array= [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(1)//the parameter determines how many levels of nested array should be recursively flattened
console.log(real_another_array);


console.log(Array.isArray("souhardya"));
console.log(Array.from("Souhardya"));
console.log(Array.from({
    name: "souhardya"
}));//interesting, cause it doesn't know what should it make an array of


let score1 = 1
let score2 = 2
let score3 = 3

console.log(Array.of(score1, score2, score3));

