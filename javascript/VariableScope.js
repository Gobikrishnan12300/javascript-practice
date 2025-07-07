///////// Function Scope
// var
function clearCut() {
  if (true) {
    var cosider = "i am a variable scobe";
  }
  console.log(cosider);
}
clearCut();
////////block scope
function blockscope() {
  if (true) {
    let blockScope = "i am a blockscope";
    console.log(blockScope);
  }
}
blockscope();

function constStaemen() {
  if (true) {
    const constStaem = "i am a const Staem";
    console.log(constStaem);
  }
}
constStaemen();

// ////////////////////////////////////////////////////////////////
// var varVariable="i am a var variabe";  //globel variable
// let letvariable= "i am a let variable"; //local
// const constvariable = "i am a const variable"; //local

// console.log(window.varVariable);
// console.log(window.letvariable);
// console.log(window.constvariable);

/////////////////////////////////////////////////////////////////

var a = 100;
let b = 200;
const c = 303;

function innerFunction() {
  var a = 100;
  let b = 200;
  const c = 300;
  function outerVariable() {
    var a = 100;
    let b = 200;
    const c = 305;
    console.log(a + b + c);
  }
  outerVariable();
  console.log(a + b + c);
}
innerFunction();
console.log(a + b + c);
