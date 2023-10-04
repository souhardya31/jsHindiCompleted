const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// syntax
/*
recuce (function(accumulator, currentValue){
    //code
},initial value)
*/

//if we don't give any initial value, it will start from the first value of the array,  but it's recommended to use inital value as 0

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)//0 is the initial value of accumulator
console.log(myTotal);

const amazonCart = [
    {
        item: 'js course', 
        price: 2999
    },
    {
        item: 'py course', 
        price: 999
    },
    {
        item: 'mobile dev course', 
        price: 5999
    },
    {
        item: 'webdev course', 
        price: 3999
    },
]

const priceToPay = amazonCart.reduce((acc, item) => item.price + acc, 0);

console.log(priceToPay);