//IIFE or Immediately invoked Function Expression is used to invoke a function immediately. It is used to make sure we don't keep any residual functions or variables in the global scope

(function chai(){
    //named iife
    console.log("chai");
})();// remember in this case semicolone is absolutely necessary because the compiler doesn't understand where to stop executing the function

( () => {
    console.log(
        "chai2"
    );
})();