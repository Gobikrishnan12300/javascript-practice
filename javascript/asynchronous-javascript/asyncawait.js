let promiseLine = new Promise((resolve, reject) => {
    
    let dataStructure = true;

    if(dataStructure){
        resolve("it will be success")
    }else{
        reject("it not success")
    }
})

async function delayfun() {
    try {
        let message = await promiseLine
        console.log(message);
    } catch (error) {
        console.log(error);  
    }
}

delayfun() 