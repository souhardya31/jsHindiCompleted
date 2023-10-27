const user = {
    username: "Souhardya",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);//we can see how the context is inside this function
    }
}

// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()
// console.log(this);//will return empty object in node environment. inside the browser we get the most global object of the browser-window object

// function chai(){
//     let username = "hitesh"
//     console.log(this);// we get a lot of things
//     console.log(this.username);// we get undefined, as in this case the context is in the global object. 
// }

// chai()

// const chai = function(){
//     console.log(this);
// }
// chai()//will return a lot of things
const chai = () => {  
    console.log(this);
}
chai()//unlike normal functions arrow functions are returning empty objects

const addTwo = (num1, num2) => num1 + num2//implicit return


// console.log(addTwo(3,7));

const user1 = () => ({username: "souhardya"})//in order to return object we need to wrap it up inside parenthesis

// console.log(user1());//will return the object

const myArray = [2, 3, 6, 7,]

function regularFuncn() {
    console.log(arguments);
}

regularFuncn(1, 2, 5)

const arrowFuncn = () => {
    console.log(arguments)
}

arrowFuncn(2, 5, 8)// won't work as expected, it gives the arguments object of the enclosing(surrounding)

const afWithArgs = (...args) => {
    console.log(args)
}

afWithArgs(2, 5, 8, 9)
