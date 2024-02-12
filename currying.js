// Currying is a process to transform a function with multiple arguments 
// into a sequence of nesting function that take one argument at a time
// function(a,b,c) --- function(a)(b)(c)

function sum(a,b,c){
    return a + b + c;
}

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

const currriedSUM = curry(sum)
console.log(currriedSUM(2)(3)(5))