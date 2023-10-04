const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

//item is not the only parameter for a for...each loop

// coding.forEach((key, index, arr) => {
//     console.log(key, index, arr);
// })


const myCoding = [
    {
        language: 'javascript',
        shortcut: 'js'
    },
    {
        language: 'python',
        shortcut: 'py'
    },
    {
        language: 'c++',
        shortcut: 'cpp'
    }
]

console.log()
myCoding.forEach( (item) => {
    console.log(`language :- ${item.language}, shortcut :- ${item.shortcut}  `);
})
