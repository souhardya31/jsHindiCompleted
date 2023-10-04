let score = "33"
let score2 = "33ss"

console.log(typeof score)

let valueInScore = Number(score)
console.log(typeof valueInScore)
console.log( valueInScore)

let valueInScore2 = Number(score2)
console.log(typeof valueInScore2)// JS will covert it's type, but will show NaN(Not a Number)
console.log(valueInScore2)//Nan // meaning Not a Number

// "33" => 33 
// "33abc" => Nan
// true => 1; faslse => 0

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0=> false
//"" => false
//"0"
//"hitesh" => true

let num2 = 33
let stringNum2 = String(num2)
console.log(stringNum2)// 33
console.log(typeof stringNum2)// string



