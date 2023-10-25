const arr = ['a', 'b', 'c']

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// is same as 

const [a, b, c] = arr

console.log(a, " ", b, " ", c)

const arr1 = [5, 76, 8]
const [q, ,r] = arr1// this way we are skipping one variable

console.log(q, " ",r)

const arr2 = [3, 5, 8, 9, 9, 10, 92, 33]
const [puchka, lassi, ...rest] = arr2// this way we are assigning the remaining variables in a seperate array

console.log(puchka," " ,lassi," " , rest)

const arr3 = [4, undefined, 'lala']
const [qw, er = 5, lala] = arr3

console.log(qw, " ", er, " ", lala)

// for objects

const obj = {
    mushroom: '🍄',
    banana: '🍌',
    pepper: '🌶️'
}

const { mushroom, pepper: chilli } = obj

console.log(mushroom, chilli)

