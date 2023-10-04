

let myHeroes = ["thor", "spiderman"]

let  heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ayush = function(){
    console.log(`ayush is present in all objects`);
} //this method will get added to all the objects

heroPower.ayush()
myHeroes.ayush()//will work as array is also an object

Array.prototype.heyAyush = () => {
    console.log(`hey Ayush`);
}

myHeroes.heyAyush()
// heroPower.heyAyush()//will show error as inheritance occurs down the line

// inheritance 

const User = {
    name: "chai",

}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


console.log(TASupport.isAvailable);

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.makeVideo);

let myName = "Souhardya      ";

String.prototype.truelength =function(){
    return this.trim().length
}

console.log(myName.truelength())
