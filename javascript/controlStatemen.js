//if Ststement

/*
if(con){
 statement
}
*/

var age =5;

if (age>=18) {
    console.log("He is eligible");   
}
if (age>=20) {
    console.log("no");
    
}
//if else
if (age>=15) {
    console.log("he is eligible for voteing");
    
} else {
    console.log("he is not eligible for voting");
    
}

let password = false

if (password) {
    console.log("Welcome to the system");
    
} else {
    console.log("incorrect password");
    
}

var hour = 15;

if(hour>=1 && hour<=6){
    console.log("good morning");
} else if(hour>=7 && hour<=12){
    console.log("good afernoon");
} 
else if(hour>=12 && hour<=18){
    console.log("good afernoon");
} 
else if(hour>=19 && hour<=22){
    console.log("good evening");
} 
else{
    console.log("none");
} 


var mark = 90;

if (mark>=50 && mark <=60){
    console.log("grade c");
} else if (mark>=61 && mark <=90){
    console.log("grade b");   
}
else if (mark>=91 && mark <=190){
    console.log("grade b");   
} else {
    console.log("grade a");
}


//Switch Statement
 let trafficlight ="red";

 switch(trafficlight)
{
    case "red":console.log("stop");
    break;
    case "green":console.log("go");
    break;
    case "yellow":console.log("caution");
    break; 
    default:console.log("unknown");
    break;
}


//Ternary operator

/*
 condiion? statement1:statement2
*/

let passwordselect = 12345;

passwordselect?console.log("it is number"):console.log("it is not a number")


