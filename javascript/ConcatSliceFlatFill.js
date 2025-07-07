//////////       concat        ///////// 

let arr =[1,2,3,4]
let arr1 = [5,6,7,8]

// let newArr = arr+arr1 ==>old method

let newArray = arr.concat(arr1)
let newArray1 = [10,20,30]
let newarray2 = [55,65]
let newArray3 = [].concat(arr1)
let totalArray =[...newArray,...newarray2]

// index should be change in by this way

arr[0] = [1000]

console.log(newArray,totalArray,newArray3,arr);


/////////////       Slice       /////////////

let newArraySlice =[10,20,30,40,50,60];

let SlicedArrayval = newArraySlice.slice();

console.log(SlicedArrayval);
/////////////////////////////////////////////////////////////////

//////////// (start, end-1)
let addArray = ["Gobi","Krishnan","vaishnavi","vaishu","Gobu"];
let SlicedSringArray = addArray.slice(0,3)

console.log(addArray,SlicedSringArray);

let numberArray =[1,2,3,4,5,6,7];
let slicedNumberArray = numberArray.slice(2,5);
console.log(numberArray,slicedNumberArray);


//////////////  Flatmethod //////////////////////////////////

// it is removed nested array consecps ===>[]

    let nestedArray = [1,2,3,4,[[5,6],7],8,9]

    let flatArray = nestedArray.flat(2);

    console.log(nestedArray,flatArray);


////////////        Fill     ////////////////////////////////
//   Replace the value of array with the given value

let fillArr = [10,20,30,40]

fillArr.fill(1,0,3)

console.log(fillArr);






