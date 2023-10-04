// for of loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet  of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps are similar to plain objects, but have different types of keys, maintain key order for loops, and have a size property for number of key value pairs stored

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for(const [key, value] of map){
    //if we only type key, it will print the whole array [key, value]
    console.log(key + "-" + value);
}

const myObject = {
    game1: "nfs",
    game2: "spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }// can't work directly on objects