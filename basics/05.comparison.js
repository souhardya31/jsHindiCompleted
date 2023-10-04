console.log("2" > 1)//true
console.log("02" > 1)//true

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null <= 0);//true == (equality check) is different the comparison operators. comparisons convert null to 0. == doesn't

// === (strict check)

console.log("2" == 2)//true
console.log("2" === 2)//false
