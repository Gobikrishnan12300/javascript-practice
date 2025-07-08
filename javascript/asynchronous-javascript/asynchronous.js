function foo(){
    console.log("first ");   
}
function foo1(){
    console.log("second ");   
}
function foo2(){
    setTimeout(() => {
        console.log("i am late");   
    }, 2000);
}
function foo3(){
    console.log("Fourth ");   
}

foo();
foo1();
foo2();
foo3();