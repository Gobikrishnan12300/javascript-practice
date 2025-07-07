function addone(a,b) {
    console.log(a*b);
}
addone(2,4)

///////////curring function

function addtwo(a) {
    return function (b) {
        return function (c) {
            console.log(a+b+c);
            
        }
    }
}

addtwo(10)(20)(30)