/////////////////////// sort ///////////////////////

// syntex ===> {return(a-b)}
//assending
// -nagetive number is not allowed
let arr = [10,50,70,20,1,5];

let Arrcon= arr.sort((a,b)=>{
 return(a-b)
});

//desending ===>{reurn(b-a)}
 let Desending = arr.sort((a,b)=>{
    return(b-a)
 })


 let newArrayFile = ["100",50,1,30,70,true];

 let newArrayFile1 =newArrayFile.sort((a,b)=>{
    return(b-a);
 })
 
console.log(Arrcon);
console.log(Desending);
console.log(newArrayFile1);

////////////// some(or |  ||) && Every(and| &&) ///////////////////

//its parallel to and && or condition
///////////////////  some  ///////////////////////////
let boss =[1,2,3,4,5];

let booster = boss.some((ele,index,array)=>{
       return ele%2 !== 0
})

console.log(booster);

////////////////   every     ///////////////////////

let hold = [1,2,3,4,5];

let holder = hold.every((ele,index,array)=>{
       return ele%2 == 0
})

console.log(holder);








