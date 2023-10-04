const user = {
    username: "Souhardya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${
        //     this.username
        // }`);//If we would have written only username, it would have shown an error
        console.log(this);
    }
}

// user.getUserDetails()
console.log(this);

//constructor function-function used to create and initialize objects

//new creates a completely new context. 

//initialization
function User(username, loginCount, isLoggedIn){
    this.username = username;//this is used to distinguish variable from parameter, here username is parameter
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;// remember without new keyword, we can't do anything without returning this
}

const userOne = new User("souhardya", 12, true)//this will create the object
console.log(userOne);
// const userTwo = User("javascript", 4, false);// will print the values in userTwo, hence we use new keyword to establish new context
const userTwo = new User("javascript", 4, false);
console.log(userOne);

console.log(userTwo)

console.log(userOne.constructor);//will return the original function