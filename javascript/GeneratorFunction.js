function* generator() {
    yield "i am Gobi"
    yield "i am krishnan"
    yield "i am john"
    
}

let gen = generator();
console.log(gen.next().value); // i am krishnan
console.log(gen.next().value); // i am john
console.log(gen.next().value); // undefined (done: true)
console.log(gen.next().value); // i am Gobi

console.log("hello");
