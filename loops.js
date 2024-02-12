const flag = true
// you cannot change the value 
if(!flag){
    // you are just reversing but not changing the value
    // its just a condition check not value changing
    console.log("value is true")
}else{
    console.log("condition not satisfied")
}

let i = 0;
while(i < 10){
    i++;
    console.log(i)
}

// in do while one round of execution always run because
// do is execured before while
// do{
//     i++
// }while(i>10);{
//     console.log(i)
// }

// from 1 to 100 give me common values whih is multiple of 2 and 5
// get first 3 values
let n = 0;
for(let k = 0; k<=100 ; k++){
    if(k%2 == 0 && k%5 == 0){
        n++;
        console.log("value of k is" + k)
        if(n == 3){
            break
        }
    }
}

