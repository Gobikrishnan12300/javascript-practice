// Char at  ===> find index value

let str = "Hello World";

console.log(str.charAt(1));

console.log(str.charAt(str.length-1)); //d

//charCodeAt ===>find ACCKI value

let srtb="Gobikrishnan";

console.log(srtb.charCodeAt(1));  // 111

// concat ===>normal concat === To convert Two strings

let newStr = str.concat(" ",srtb);

console.log(newStr);  //Hello World Gobikrishnan

// includes ===> the string true (or) false
let strcon = "manupulating";

console.log(strcon.includes("pp"));

// indexof ===> To find index value of sring (left to right)

let consecpt = "python";

console.log(consecpt.indexOf("y")); //1

// lastindexof ===>  To find index value of sring (right to left)

let book = "laungage";

console.log(book.lastIndexOf("e")); //7

//repeat ===>  Repeat the sring to count

let formula = "javacoder";

console.log(formula.repeat(5));  //javacoderjavacoderjavacoderjavacoderjavacoder

//replace ===> search the sring and replace the value

let formula1 = "codingpyhon html";

console.log(formula1.replace("html" , "scroll")); //codingpyhon scroll

//slice ===> start and ending number to find string

let formula2 = "coding job";

console.log(formula2.slice(1,4)); //odi

//substring && Substr // same as slice but not get negative index

let newStrStr = "single thread";

console.log(newStrStr.substring(1,4));


//split ===> To split the value

let confident = "mulpi number";

console.log(confident.split("" )); 

console.log(confident.split("-" ));

//startWidth ===> staring true or false

let formation = "i am thor";

console.log(formation.startsWith("i"));

//endsWith ===> ending true or false

let formation1 = "thor";

console.log(formation1.endsWith("h"));

//toLowercase ===> convert capital to small

let lowerformet = "  JUnggle";

console.log(lowerformet.toLowerCase());

//touppercase ===> convert small to capial

let lowerformet1 = "  JUnggle rummey";

console.log(lowerformet1.toUpperCase());

//trim ===>Dont accept the space

console.log(lowerformet1.trim());

//trimstart ===> 

let booster ="  corona  "

console.log(booster.trimStart());

//trimEnd ===>

console.log(booster.trimEnd());













