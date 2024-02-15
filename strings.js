let days = 'tuesday'
console.log(days.length); // 8

console.log(days.slice(0,5)) // tuesd

console.log(days[2]) // e

let splitarray = days.split("s")
// split method should return an arrray 
// because array can only store the multiple values
console.log(splitarray)
console.log(splitarray[1].length)
console.log(splitarray[1].trim().length)

// we cannot substract strings 
let date = "23"
let nextDate = "29"
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)

let newQuote = days + "is Funday day"
console.log(newQuote)

let val = newQuote.indexOf("day")
console.log(val)
let count = 0;

while(val !== -1){
    count++
    val = newQuote.indexOf("day", val + 1)
}

console.log(count) // 3 times the "day" is present in newQuote



