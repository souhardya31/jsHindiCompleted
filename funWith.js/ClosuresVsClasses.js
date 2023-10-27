function fAdder() {

};

class Adder {
    constructor(a) {
        this.a = a;
    }

    add(b) {
        this.a += b;
    }
}

const adder = new Adder(2)
adder.add(5)

console.log(adder.a)// so we can excess a from the object
adder.a = 3
console.log (adder.a)// which might not be well suited in all cases, so we have to use normal closures(functions)

// we can say that variables aren't completely encapsulated within classes

