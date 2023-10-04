// Date
    let myDate = new Date()
    //they are stored in millisecond calculated from an arbitrary date
    // console.log(myDate);
    // console.log(typeof myDate);
    // console.log(myDate.toString());
    // console.log(myDate.toDateString());
    // console.log(myDate.toLocaleDateString());


    // let myCreatedDate = new Date(2023, 0, 23)//y/m/d// remember indexing of month  0 to 11
    // let myCreatedDate = new Date("2023-01-23")//y/m/d
    // let myCreatedDate = new Date("01-23-2023")//m/d/y

    // console.log(myCreatedDate.toLocaleDateString());

    let myTimeStamp = Date.now()

    console.log(myTimeStamp);
    console.log(myCreatedDate.getTime());//gives the value in ms

    //for seconds
    console.log(Math.floor(myCreatedDate.getTime()/1000));

    let newDate = new Date()
    console.log(newDate);

    console.log(newDate.toLocaleString());

