//Stack is used in Primitive, Heap is used in nonPrimitive 

    let myYoutubeName = "nonExistent"
    let anothername = myYoutubeName
    anothername = "durbl"
    console.log(myYoutubeName);// the value doesn't change in the original variable. This is because when you copy a variable stored in stack memory, you get a copy of that variable

    let userOne = {
        email: "lala@gmail.com",
        name: "sohu",
        teacher: "durbl"
    }

    let userTwo = userOne

    userTwo.email = "durbl@gmail.com"

    console.log(userOne);
    console.log(userTwo);

    //as we can see email was changed because, as when we copy a variable stored in heap memory, it's reference value is also copied, meaning a change in any of the variable will lead to the same change in all of them. This is called shallow copy