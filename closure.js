
// function outer(){
//     let counter = 0;
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     inner();
// }
// outer();
// outer();

// this will return 1 1 because same function will call twice with default counter 0

function outer(){
    let counter = 0;
    function inner(){
        counter++
        console.log(counter)
    }
    return inner;
}
const fn = outer();
fn()
fn()
// this will return  1 2 because of closures 
// when we return a function from another function, we are returning a 
// combination of function defination with its scope.
// This willl let the function have an associated persistant memory which could hold on to live data
// between executions
// The combination of the function and its scope chain is called closure in JS





