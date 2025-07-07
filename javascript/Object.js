let persionDeails = {
    Name:"Gobi",
    Age:25,
    Gender:"Male",
    Occupation:"Working",
    eat : function(){
        console.log("I am eaingfruits");
        return "I am eaing food";
    }
}

console.log(persionDeails.Name);
console.log(persionDeails.Age);
console.log(persionDeails.Gender);
console.log(persionDeails.eat());

let foodDetails = persionDeails.eat();
console.log(foodDetails);

///////////////////////////////////

let uName="krishnan";
let Age= 20;
[declaraion]= "employeeId"

let persion1={
    uName,
    Age,
    [declaraion]: 12345
}

console.log(persion1.uName, persion1.Age, persion1[declaraion]);


