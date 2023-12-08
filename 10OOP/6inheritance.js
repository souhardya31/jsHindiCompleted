class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123" )
chai.addCourse()
const masalaChai = new User("masalaChai")


// je besi property use korte pare, he instance of kom property

console.log(masalaChai instanceof User);//true

console.log(chai instanceof User)//true
