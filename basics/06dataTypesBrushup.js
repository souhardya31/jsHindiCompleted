//Primitive
    // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// javascript is a dynamically/loosely typed language: type checking occurs at runtime. we also don't define the dataType in syntax

const id = Symbol('23')
const anotherId = Symbol('23')
const bigNumber = 324324324234342342342432434n//this is how you declare a bigInt number

console.log(id == anotherId);//false// Symbol is used to asign unique values, even though they may look the same



// Reference type(non Primitive): derived from primitive dtattypes
    // Array, Objects, Functions

// typeof function
    console.log(typeof bigNumber);
    console.log(typeof null);//object
