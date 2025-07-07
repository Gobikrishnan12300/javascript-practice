////////// Filter /////////

let employee = [
   {
    employeName : "john", salery: 25000},
    {employeName:"Gobi", salery:20000},
    {employeName:"krishnan",salery:30000
   }
]

let filerGround = employee.filter( (value, index,array)=>{
    return value.employeName.includes("Gobi")
})

// console.log(filerGround);

///////////// Find //////////////

let findDataCollecion = employee.find((item)=>{
    return item.salery>20000
})

console.log(findDataCollecion);

