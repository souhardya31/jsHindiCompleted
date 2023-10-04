const userEmail = ""

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}

//falsy values
    // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy
    // everything else.like literally everything else. Here are some values that surprised me
        // "0", "false", " ", [], {}, function(){}

// Nullish Coalescing Operator (??): when used gives the first value ignoring null and undefined

let val1 = null ?? 20 ?? 30?? undefined ?? 30

console.log(val1);


//Terniary Operator

//condition ? if true statement: if false statement

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");