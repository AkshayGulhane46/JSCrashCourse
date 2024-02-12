// var let const
// var and let are almost same

let a = '%';
console.log(typeof(a));

let c = false
console.log(typeof(c))

let d = null
console.log(typeof(d))

let e = undefined
console.log(e)

let b = a+c
console.log(b)

// we cannot redclare the variable with let keyword 
// but redclaration is possible with var

var declare = 12;
var declare = 32;
var declare = declare + declare;
console.log(declare); // 64 will be answered 

// NOT operator
var require = true
console.log(!require);

/// Reassigning is allowed with var and let
// Declaring is not allowed in let

let first = 10;
first = 20;
console.log(first)








