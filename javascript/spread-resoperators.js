// {...} [...] ===>Spread operaors

let hoppies = ["cricker","football", "baseball"]
let allSports = [ "basketball", "tennis", "golf"]

let newArray =[...hoppies , ...allSports
]

hoppies[0]="music"


let newArraay1 = hoppies+allSports
console.log(newArray);
console.log(newArraay1,hoppies);

//////////////object////////

let team1 ={
    name:"manchester united",
    age: 30,
    country:"england",
    city:"london"
}

let team2 ={...team1,hopy:"music",sport:"cricket"}
console.log(team2);


//////////////Rest Operators////////

function arraymehod (...arr){
    console.log(arr);
    
}
arraymehod(1,2,2,5)

