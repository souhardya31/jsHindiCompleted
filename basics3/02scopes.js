// var c = 300
// let a = 300

// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("Inner: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c); // only c is printable as var is global scoped

// // ++++++++++++++++++//


function one(){
    const username =  "Souhardya"

    function tow(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);

    tow()
}

one()

// // mone rakhar liga emne bhabte pari- boro rar thika choto ra ice-cream khaia laite pare, but chotorar thika borora khay na generally.

// //+++++++++++ function declaratoion ++++++++++++++++


console.log(addTwo(3))
function addTwo(num){
    return num + 2
}//As we can see if we declare function like this. We can call the function before we actually define the function, this is because the whole function is hoisted. 

// console.log(addOne);
// const addOne = function(num){
//     return num+1
// }// this is not possible as const isn't hoisted, only var is also as undefined