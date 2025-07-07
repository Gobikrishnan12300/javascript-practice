//For loop
 
// for(initialization;condition ;counter){

// }

for(let i=1;i<=10;i++){
    console.log(1);  
}

//even number print

for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(i);
    }
}

for (let i=1; i<=10; i++) {
    if(i%2!==0){
        console.log(i);
        
    }
}

//while

let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}