console.log(addTwo(3))
function addTwo(num){
    return num + 2
}//As we can see if we declare function like this. We can call the function before we actually define the function, this is because the whole function is hoisted. 

console.log(addOne);
const addOne = function(num){
    return num+1
}// this is not possible, as when hoisted, addOne is set as undefined