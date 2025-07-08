let fun =new Promise((resolve, reject) => {
    dataFilter1 = true;

    if(dataFilter1){
        resolve("you are selected")
    }else{
        reject("you are not selected")  
    }
})

fun.then((message)=>{
 console.log("success" + message);
}  
).catch((failure)=>{
console.log("failure"+ failure);
}
).finally(()=>{
    console.log("end"); 
})