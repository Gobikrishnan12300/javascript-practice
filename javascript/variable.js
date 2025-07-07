    //  variable
    //  variable is a coinainer. it is used to store the numeric values.Used keyword=let,var,const 
    //  keyword variable_name=value 
    
    let userName= "front end development";
    var email="gobikrishnan12300@gmail.com";
    const phone= 1231231230; 
    console.log(userName);
    console.log('first',email)
    console.log("phonenumber",phone)
 
    // var
    var age =30; // Declaration and initialization
    var age; // Declaration 
    age = 30; // Initialization
    var age = 50; // Re- declaration
    age ="ten"; // Re-inialzation
    console.log(age);

    //let

    // let newAge =30; // Declaration and initialization
    let newAge; // Declaration 
    age = 30; // Initialization
    // let newAge = 50; // cannot Re- declaration
    age ="ten"; // Re-inialzation
    console.log(age);

    //const
     // connot avaiable re-Declaration and re-Inialzation
    const employeeName ="Gobikrishnan"
    console.log(employeeName);

      ////////////////////// DATA TYPES//////////

    // It is two types
    // 1.primiive Data type -> String,Number,Boolean,undefined,null,int
    // 2.non-primiive Data type -> Object,Array,Date,function;

    // string

    var username = "my first name";
    var username= `my second name`;

    // Number
    let myage =24;

    // boolean
    var student= true;
    student=false

    // undefind

    let noValue;

    // null

    let myAge = null


    console.log(username,myage,student,noValue,myAge);


    // non-primiive Data types or Reference Type

    // array

    let socialMedia = ["instagram", "facebook", "sharechat", "youTube"];
     // index              0            1          2            3
     //length              1-4            2=-3          3=-2            4 =-1
    console.log('socialMedia',socialMedia);
    console.log(socialMedia[0]); //index
    console.log(socialMedia[3]); //index    
    
    console.log(socialMedia.length);
    console.log(socialMedia[socialMedia.length-1]);
    console.log(socialMedia[socialMedia.length-4]);
    
    
    // Object
    // key value
    const persion ={
      name:"Rahul",
      age:24,
      gender:"male",
      phone:98565854,
      address:{
        city:"delhi",
        state:"delhi",
      }
    }
    console.log("object",persion);

    console.log(persion.age);
    console.log(persion.address);
    console.log(persion.address.city);


      
    
    
    
    

    


    




    
    



