// if 

// <, >, <=, >=, ==, !=, ===
if (2 === "2"){
    // console.log("executed");
}


const score = 200

if (score > 100){
    const power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);//not possible due to local scope

const balance = 1000

// if (balance > 500) console.log("test");//btw you should definitely use ; here, also you can use , for entering multiple lines of code



// if (balance <500){
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userLoogedIn = true
const debitCard = true
const loggedInFacebook = false
const loggedInGoogle = true

// if (userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// } 

if(loggedInFacebook || loggedInGoogle){
    console.log("Allow to buy");
}



