// Number

    // const score = 400
    // console.log(score);
    // console.log(score.toString().slice(1,2))
    

    // const balance = new Number(100.43655)//As we have seen for string, it creates an object
    // console.log(typeof balance);

    // console.log(balance + 1)

    // console.log(balance.toString().length);//
    // console.log(balance.toFixed(2))//it will round off upto two decimal places


    // const otherNumber = 23.8966

    // console.log(otherNumber.toPrecision(5));//it will give precisely 4 digits after rounding off

    // const hundreds = 1000000
    // console.log(hundreds.toLocaleString());
    // console.log(hundreds.toLocaleString('en-US'))


// // Math 
//     // we can check in the browser that Math has a lots of predefined methods
//     console.log(Math.sqrt(4))
//     console.log(Math.abs(-55))//returns absolute(positive) value
    
    // console.log(Math.round(4.3));
    // console.log(Math.floor(4.9))
    console.log(Math.ceil(4.3))
    // console.log(Math.random())//gives a random value each time in [0,1)

    // console.log(parseInt((Math.random()*10)+1));

    const min = 10
    const max = 20

    //Now with random let's try to write a program to give a random number between 10 & 20

    console.log(Math.floor(Math.random()*(max -min+1)+min));

    // explanation-
        // first we calculate the range, add 1 to it, and multiply with random. We add one, because the range of random doesn't include 1, as a  result it gives us a value starting from zero to range. And then we add min to it in order to ensure it's from min to max. then we floor it to round it off to the lesser value
        