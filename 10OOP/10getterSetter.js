class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase()
    }// name of the getter & setter should be the parameter name, in this case "password"

    set password(value){
        this._password = value//note that the value isn't stored as uppercase. for 
    }//getter won't work without setter, get wis shown to user & set is stored value
}

const ayush = new User("hshouardya", "abc")
console.log(ayush.password)