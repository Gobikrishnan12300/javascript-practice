
//////////// use map /////////////////

let fruis = ["Apple","orange","banana","lemon","waermelon"]

let newfruits = fruis.map((cloneElement,index) =>{
    return {id:index+1, fruits:cloneElement}
})


console.log(newfruits);

////////// chaining map ////////////////

///useoher concepts ///////////////

let newmpafun = fruis.map((cElement)=>{
    return cElement
}).sort();

console.log(newmpafun);

