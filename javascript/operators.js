// Arihematic operators
// 1.addion
// 2.subraction
// 3.multiplication
// 4.division
// 5.exponentiation
// 6.modulus
// incremen
// decremen
// 7.bitwise AND
// 8.bitwise OR
// 9.bitwise XOR
// 10.bitwise NOT

// addtion

console.log(10+20);

//subration

console.log(10-5);

//multiplication

console.log(10*2);

//division

console.log(10/2);

// module
console.log(10%3);

// exponentiation
console.log(3**2);

// increment(++)

var num=15;
num++;  //post increment ==>num = num+1 =15+1 =16
++num; //pre increment ==>num =1+num =1+16=17
console.log(num);

//decremen(--)

var num =15;
num--; //post decremen ==>num= num-1 =15-1=14
--num; //pre decremen ==>num=-1-num=1-14=13

console.log(num);

// post increment

/*
1.substiude
2.operation
3.Incremen
*/

var num = 20;
num1=num++; 

// num1= 20++ ==>21
//num = 20

var num1 = num++ + num++
 

console.log(num,num1); //(21,20)

// //////////////Relaional operator/////////////

var age = 25;

console.log(20==25); 
console.log(20<25); 
console.log(20>25); 
console.log(20<=25);
console.log(20>=25);
console.log(20!=25);
console.log(20=="20"); //only to take value(==) ==>true
console.log(20==="20"); //both value and type(===) ==> false
console.log(20!=22);
console.log(20!==25);
console.log(20!=="20");
console.log(20!="20");


////////////////////Logical operaor////////

//Logical AND(&&)
/*cond1  cond2  Result
  true   true   true
  true   false  false
  false  true   false
  false  false  false
*/ 

var age = 10;

console.log(age>5 && age>8); //true
console.log(age>15 && age>8); //false
console.log(age<15 && age>8); //false
console.log(age<15 && age<8); //false


//Logical OR(||)
/*cond1  cond2  Result
  true   true   true
  true   false  true
  false  true   true
  false  false  false
*/ 

var password ="1234";

console.log(  password=="1234" || password=="1234"); //true
console.log(  password=="1234" || password=="5678"); //true
console.log(  password=="4587" || password=="1234"); //true
console.log(  password=="588" || password=="5678"); //false


// Logical not(!) 

// true==false
// false==true













