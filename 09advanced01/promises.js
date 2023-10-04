//In order to understand what's going on comment everything out except the one promise you wanna underssatnd and then run




//creation of promise. here we are just creating the promise, later we have to connect it to other things to consume it
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();//this helps to connects it to then, if we don't the function in then will not work
    }, 1000)
});

// consumption
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 3");
        resolve({user: "me", email: "me@example.com"});//since it's connected to then, the parameter will be passed to then, hence we can directly access this data
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = true
        let error = false
        if (!error) {
            resolve({username: "Htiesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//then() - when promise resolved successfully
//catch() - when promise rejected
//finally() - when whether resolved or rejected

promiseFour
.then((user) => {
    console.log(user);
    return user.username//It's worth mentioning this value will not go anywhere but in the next function inside then.
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if (!error) {
            resolve({username: "Souhardya", password: "312"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error){
        console.log(error);
    }
}


consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response);//this will log in text forms
        const data = await response.json()
        console.log(data)//won't work without await as response.json() returns another promise
        console.log(typeof data)
    } catch (error) {
        console.log("E: ", error);
    }


}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})//just like before we can't directly console.log response.json() as it returns another promise
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

/* IT SHOULD BE NOTED THAT FETCH HAS IT'S OWN QUEUE ( REFER 2nd DIAGRAM) CALLED MICRO TASK/ PRIORITTY QUEUE, WHICH ALWAYS GETS CALLBACKS INSIDE CALL STACK BEFORE THE THINGS IN TASK QUEUE.*/

