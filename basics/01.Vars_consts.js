const accountId = 14411
let accountEmail = "souhardya@google.com"
var accountPassword = "12345"
accountCity  = "Agartala"




// accountId = 1234//We can't edit values of constants

/*
prefer not to use var, because of issue in block scope and functional scope
*/

accountEmail = "lala@google.com"
accountPassword = "2346"
accountCity = "Udaipur"


let accountState
//Remember in Javascript, when we don't assign any value to a variable, it is stored as undefined

console.table([accountEmail, accountPassword, accountCity, accountState])

//