var num ="10";
var num1=20;

console.log(num+num1);
console.log(typeof(num+num1));

//string
//string + anything = string

console.log("25"+true);
console.log(typeof("25"+true));
console.log("25"+undefined);

// number
// true=1, false=0
console.log(10+true); // 11
console.log(10+undefined); //NaN
console.log(10+false); // 10
console.log(10+null); // 10
console.log(10+[1]); // 101 convert to string
console.log(10+{}); // 101 convert to string

//Boolean

console.log(10+true); //11
console.log(true+undefined);
console.log(false+null);
console.log(true+[1]);
console.log(true+false);

//implecit convertion

console.log(10-'8'); //2 
console.log(10-'abc'); //NaN

//Explicit convertion

console.log(10+Number('10')); //20
console.log(Number("abc")); //Nan
console.log(Number (true));//Nan

//Boolean
// if we give any number its true otherwise its false 
console.log(Boolean(true));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean[0]);













