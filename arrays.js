var marks = Array(6)
marks = new Array(20,40,35,12,37.100)

// or

var marks = [20,30,40,50,60]
console.log(marks[3]); 
marks[3] = 999;
console.log(marks[3]); 
console.log(marks);
marks.pop()
console.log(marks);
console.log(marks.indexOf(30))
console.log(marks.includes(999))

// create sub array
var submarks = marks.slice(2,4)
console.log(submarks)

var sum = 0;
// note if you just write sum it wlll give NaN 
// that is why you need to assign sum = 0
for(let i = 0 ; i < marks.length ; i++){
    console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)

// reduce, filter and  map are implemented on arrays
// reduce is used to perform operations on all the elements in array
// first in reduce is sum is accumulator 
// accumulator (sum) will be changes everytime
// mark is the individual element
// and in function body we can write logic, sum + marks and the initial sum is 0 
let total = marks.reduce((sum,mark) => sum + mark,0)
console.log(total)

// same code for multiplication for all the numbers in array
let mul = marks.reduce((mul,mark)=>mul * mark , 1)
console.log(mul)

var scores = [12,13,14,15,16]
var evenScores = []

for(let i = 0 ; i < scores.length ; i++){
    if(scores[i] % 2 == 0){
        evenScores.push(scores[i])
    }
}

console.log(evenScores)

// now how to write above using filer 
// filter is used to get the desired values from given condition 
let newFilterScores = scores.filter(score=>score%2 == 0)
console.log("using filter" +  newFilterScores)

// map function 
// map is used to perform operation on each element like multiply each element by 3

let mappedArray = newFilterScores.map(score=>score*3)
console.log(mappedArray)

// reduce the array to a sum of all the elements

let newSum = mappedArray.reduce((sum, val) => sum+val, 0)
console.log(newSum);


// chaining can be done with map, reduce and filter

var scores1 = [12,13,14,15,16]
// create new array with even numbers then multiply by 3 and get the addition of them
let output = scores1.filter(score => score%2 == 0).map(score=> score * 3).reduce((sum,val)=> sum+val, 0)

console.log(output);

let fruits = ["Banana", "Mango", "Pomogranate" , "Apple"]
// sort can only sort the strings
console.log(fruits.sort());
console.log(fruits.reverse())

// as it doesnt work for numbers you need to write custom logic
// the below logic is the bubble sort where it takes a and b and minus them 
let scores2 = [12,13,54,11,9,5,3,1,88,235,877,111]
scores2.sort((a,b)=>(a-b))
console.log(scores2);

// reverse the numbers
scores2.sort((a,b)=> (b-a))
console.log(scores2)
// 


