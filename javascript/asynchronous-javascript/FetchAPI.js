/////////////  promise  //////////////////////////

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=>{
   return response.json();
    
}).then((data)=>{console.log(data)
}).catch((error)=>{console.log(error);
})


fetch("https://dummyjson.com/users/2")
.then((response)=>{return response.json();
})
.then((data)=>{console.log(data);
})
.catch((error)=>{console.log(error);
})

//////////////// asyncawait function //////////////

 async function datafool() {
    try {
        const response = await fetch("https://dummyjson.com/carts")
        const data = await response.json(); 
        console.log(data);  
    } catch (error) {
        console.log(error); 
    }
}

 async function datafiler() {
    try {
        const responsedata = await fetch("https://dummyjson.com/carts")
        const data = await responsedata.json()
        console.log(data);
    } catch (error) {
        console.log(error);   
    }
 }