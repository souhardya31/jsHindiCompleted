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