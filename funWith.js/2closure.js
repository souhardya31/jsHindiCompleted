function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;//not only the function will be returned, but also it's whole lexical scoping will be returned
  }
  init();

  