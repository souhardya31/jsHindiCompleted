const piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI")
Math.PI = 5;
console.log(Math.PI);//will show the real stored value, 3.14.....
console.log(piDescriptor)
// Object.defineProperty(Math, "PI", {
//     writable: true
// })//will throw an error as it's not configurable

const chai = {
    name: 'giner chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})     

// Object.defineProperty(chai, "name", {
//     writable: true

// })//will throw an error, only value can be changed
      
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
        console.log(`key:${key}, value:${value}`)//we'll see thta name is not being printed, as we have already set enumerable: false, for name
}

