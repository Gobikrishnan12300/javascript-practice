let persion ={
    username :"Hello Gobi",
    age:20

}

function userName (uName,uAge){
    // console.log("is there anyone", persion?.username ,persion?.age);

    // if (uAge<=50) {
    //     console.log("you are eligiable");   
    // } else {
    //     console.log("you are not eligiable");
    // }

    if (uAge<=50) {   
        console.log(`hii ${uName} , your age is ${uAge}`);
    }
}
 userName("Salman",50)
 userName("john",25)
 userName("Barthi",57)
 userName("Dhoni",43)

//////////////////////////////////////////////////

 let employeeId = "";
 let employeeName = employeeId;

 function employee(employeeId ="123") {
    console.log(employeeId);
 }
 employee()

 /////////////////////////////////////////////

 let source = "";
 let newSourse =source || "hello das"

 console.log(newSourse);


 ///////////////////////////////////////////////

 //return Type

 function passData(k,b) {
    let condition =true;
    if (condition) {    
        return k*b
    }else {
        return  null
    }
 }
 console.log(passData(5,6));


 
  

