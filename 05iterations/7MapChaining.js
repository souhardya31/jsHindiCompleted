//filter is for returning using relational operators, and map is for returning using arithmatic operators 

const myNumbers = [1, 2, 3, 4, 5, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10)

console.log(newNums);

const newNums2 = myNumbers
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num >= 40)//first one first

console.log(newNums2);