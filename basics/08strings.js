const name = "Puneet"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}` );//this is string interpolation, this is preffered over the normal string

const gameName = new String('hitesh')// creates an object, such that we get the properties of string along with object
console.log(typeof gameName);//object

console.log(gameName[3]);
console.log(gameName.length)
console.log(gameName.charAt(3))
console.log(gameName.indexOf('e'))

const newString =  gameName.substring(0,4)// char at 0 to 3 indices will be copied, meaning the start index is inclusive and the end index is exclusive. btw negative values will treated as 0
console.log(newString)

const anotherString = gameName.slice(-3,4)//it crops from start(inclusive) to end(exclusive)
console.log(anotherString);

const myName = "    Souhardya      "
console.log(myName)
console.log(myName.trim())//It trims extra whitespaces from both ends

const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim"

console.log(url.replace('JavaScript', 'TypeScript'));

console.log(url.includes('JavaScript'));

const lalaland = "Hello javaScript How are you"
console.log(lalaland.split(' '));// it makes a list of substrings based on the separator. here ' ' is the separator
 