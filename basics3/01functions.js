function addTwoNumbers(num1, num2){
    return num1 + num2
    console.log('sjlkj')
    //anything written after return doesn't get executed
}

const result = addTwoNumbers(7, 9)
// console.log(result);

function loginUseMessage(username){
    if(!undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUseMessage());


//we might not know how many function parameters need

    function calculateCartPrice(...num1){
        return num1
    }
// rest operator ... is used
    // console.log(calculateCartPrice(2, 4, 6));
    // function calculateCartPrice(val1, val2, ...num1){
    //     return num1
    // }
// rest operator ... is used
    // console.log(calculateCartPrice(2, 4, 6, 4, 4, 8, 0));// the first two values will be asigned as val1 and val2 and the rest operator will work on the rest


    const user = {
        username: "souhardya",
        price: 199
    }

    function handleObject(anyObject){
        console.log(`Username is ${anyObject.username}, and price is ${anyObject.price}`);
    }

    // handleObject(user)

    const myNewArray = [200, 400, 100, 600]
    function returnSecondValue(getArray){
        return getArray[1]
    }

    console.log(returnSecondValue(myNewArray));