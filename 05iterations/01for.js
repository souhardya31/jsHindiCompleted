// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let myArr = ['flash', 'batman', 'superman']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}


// break && continue

// for ( let index = 1; index <= 20; index++){
//     if(index === 5){
//         console.log("5 detected");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }
for ( let index = 1; index <= 20; index++){
    if(index === 5){
        console.log("5 detected");
        continue;
    }
    console.log(`Value of i is ${index}`);
}