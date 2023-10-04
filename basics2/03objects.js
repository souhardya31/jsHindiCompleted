// singleton. 
// Object.create()

// object literals

const mySym = Symbol("key1")
const mySym1 = Symbol("key1")

    const JsUser = {
        name: "souhardya",
        "full name": "Souhardya Baishnab",
        mySym: "myKey1",
        [mySym1]: "Key1",
        age: 18, 
        location: "jaipur",
        email: "hitesh@google.com",
        isLoggedIn:false,
    }//keys: values
    //by default the keys are stored as strings

    // console.log(JsUser.name);
    // console.log(JsUser["full name"]);

    // console.log(typeof JsUser.mySym);
    // console.log(typeof JsUser[mySym1]);


    JsUser.email= "ss@gmail.com"
    // console.log(JsUser);
    // Object.freeze(JsUser)
    // JsUser.name = "Lala Land"
    // console.log(JsUser);

    JsUser.greeting = function(){
        console.log("Hello JS User")
    }
    JsUser.greetingTwo = function(){
        console.log(`Hello user ${this.name}`);
    }

    console.log(JsUser.greeting());
    console.log(JsUser.greetingTwo());

