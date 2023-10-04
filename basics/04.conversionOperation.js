// console.log (2+2)
// console.log (2-2)
// console.log(2*2)
// console.log(2**3)// meaning 2^3
// console.log(2/3)
// console.log(2%3);

let str1 = "hello"
let str2 = "Sohu"

// console.log(str1 + str2)

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2)//122
// console.log(1 + 2 + "2")//32

//don't depend on these properties, use parenthesis ()

console.log(+true)//this will convert to number
console.log(+"")
console.log();

let x = 3
const y = x++
console.log(String(x) + " " + String(y))// x gets incremented to 4 in the next line but y doesn't because postfix increment operator is used 

const z = ++x
console.log(z)