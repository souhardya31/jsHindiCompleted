const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



    const regularUser = {
        userfullname: {
            fullname: {
                firstname: 'Sohu',
                lastname: 'Baishnab'
            }
        }
    }

    // console.log(regularUser.userfullname.fullname.firstname);


    const obj1 = {1: 'a', 2: "b"}
    const obj2 = {3: 'a', 4: "b"}
    const obj3 = {5: 'a', 6: "b"}
    

    // console.log({obj1, obj2, obj3})//similar problem like array, object under object

    // console.log(Object.assign({}, obj1, obj2, obj3));//the first array is the target. Meaning all the objects written after it will be inserted in it. see documentation for better understanding
//    const merge = {...obj1, ...obj2, ...obj3}
    // console.log(merge);

    const users = [
        {
            id: 1,
            email: "h@gmail.com"
        },
        {
            id: 2,
            email: "lla"
        },
        {
            id: 3,
            email: "sklj"
        },
    ]
    

    // console.log(users[2].email);//name[key index].key



    console.log(tinderUser.hasOwnProperty('isLoggedIn'));

