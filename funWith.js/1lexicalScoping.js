function outer(){
    let username = "hitesh"
    function inner(){
        console.log("inner", username);

    }
    inner()
}

// console.log("outer", username)//will throw error

//you know why it's happening and this is what lexical scoping is

