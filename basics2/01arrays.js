const myArr = [0, 1, 2, 3, 4, 5];
console.log(typeof myArr);//almost everything in js is secretly an object

// //resizable, zero indexed, non-associative(can't be accessed by arbitrary strings), shallow , can contain any dataTypes


// const myArr2 = new Array(1, 2, 3, 4)

// // Array methods

    // myArr.push(7)
    // console.log(myArr);
    // myArr.pop()
    // console.log(myArr);

    // myArr.unshift(9)
    // console.log(myArr);
    // myArr.shift()
    // console.log(myArr);

    // console.log(myArr.includes(3));

    // const newArr = myArr.join()//creates a new string

    // console.log(myArr);
    // console.log(newArr);

//     //slice and splice

    // console.log("A ", myArr);
    const myn1 = myArr.slice(1, 4)//creates start(inclusive), end(exclusive)
    console.log(myn1);  
    console.log("B ", myArr);  

    const myn2 = myArr.splice(1,4)
    console.log(myn2);
    console.log("C ", myArr);

//     //As we can see the real difference between slice and splice is that slice doesn't alter the original array, but splies cuts its part in the original array



