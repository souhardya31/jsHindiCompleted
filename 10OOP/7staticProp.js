class User {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }//unusable
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId());//createId is unusable, will throw an error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")


