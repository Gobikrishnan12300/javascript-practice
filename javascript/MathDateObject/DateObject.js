// Date.getFullYear();

let dataform = new Date();

console.log(dataform);

console.log(dataform.getFullYear());

//Date.getmonth()

console.log(dataform.getMonth() +1);

//Date.getDate()

console.log(dataform.getDate());

//Date.gethours();

console.log(dataform.getHours());

//Date.getminutes();

console.log(dataform.getMinutes());

//Date.getsecond();

console.log(dataform.getSeconds());

//Date.setFullYear(year,month, day)

dataform.setFullYear(  2025,6,8)

console.log(dataform);

//Date.setMonth(month, day)

dataform.setFullYear(6,8);

console.log(dataform);

//Date.setDate(day)

dataform.setDate(12);

console.log(dataform);

console.log(dataform.toLocaleDateString()); //12/9/6

console.log(dataform.toDateString()); //Tue Sep 12 0006

console.log(dataform.toLocaleTimeString()); //12:06:28 pm

console.log(dataform.toLocaleString()); //12/9/6, 12:06:28 pm










