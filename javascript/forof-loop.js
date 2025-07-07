/////// synex /////
// for of === > let itrator of arr

////////////array//////////////
let array =[10,20,30,40,50]

for(let value of array){
    console.log(value);
    
}

///////////string////////////

let str ="Gobikrishnan"

for (let consider of str){
        console.log(consider);
        
}

//////////function/////////

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator =generator();

for(let value of iterator){
    console.log(value);
    
}


//////////object///////////

///////////////////forin-loop/////////////////////

let obj = {
    name:"gobikrishnan",
    age:25,
    city:"chennai",
    hobbies : ["criclet","music","lisening","help"],
    familyDetails : {
        father:"a",
        mother:"b",
        brother:"c",
    },
    walk(){
        console.log("i am walking"); 
    }
}

for(let input in obj){
    console.log(obj[input]);
    
}

////////////////////////////////////
let arr = [100,200,3000,400]

for (let value in arr){
    console.log(arr[value]);
    
}