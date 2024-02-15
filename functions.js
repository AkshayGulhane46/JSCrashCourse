// function is a block of code

// var is a global level or function level keyword
// let is a global level or Block level like inside these  { }
// const is like let but it cannot be reinitialized

let letGreet = "Evening"
var varGreet = "Evening"
const num = 19;

if(1 == 1 ){
    let letGreet = "Afternoon"
    var varGreet = "Afternoon"
    const num = 12;
}

function add(a,b){
    let letGreet = "Morning"
    var varGreet = "Morning"
    return a+b
}

let sum = add(2,3)
console.log(sum)
console.log(letGreet); // will be still EVENING 
console.log(varGreet); // will become AFTERNOON
console.log(num)


// another way to write functions is anonymus functions
// function expressions 

let sumOfIntegers = function(c,d){
    return c+d
}


let sumOfNumbers = (c,d) => c + d
console.log(sumOfNumbers(4,2))

