class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User{
    //user becomes an istance of teacher
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


//choto jon boro jon er instance, vice versa not true

console.log(masalaChai instanceof User);//masala chai ekta object jeda User class dia i toiri hoise

console.log(masalaChai instanceof Teacher)// user abar instance of teacher, tai masalaChai o instance of teacher