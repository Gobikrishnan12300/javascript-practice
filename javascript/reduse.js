///////////////  reduse mehod //////////////////////

let valueArr = [1,2,10,20,30,3];

let valuearr1 = valueArr.reduce((acc,ele,index,array)=>{
    return acc + ele;
},0)

console.log(valuearr1);

let employee = [
    {name:"John",age:25,salary:5000},
    {name:"Anna",age:30,salary:6000},
    {name:"Peter",age:35,salary:7000}
]

let employeecurr = employee.reduce((acc,ele,index,array)=>{
    return acc+ele.salary
},0);

console.log(employeecurr);


