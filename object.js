// object is a collection of properties

let person = {
    firstName : 'Akshay',
    lastName : 'Gulhane'
}

console.log(person.lastName)
console.log(person['lastName'])

person.firstName = 'Nikhil'

console.log(person.firstName)

person.gender = 'male'

console.log(person); // we can add property


console.log('gender' in person); // true 

console.log('area' in person); // false

// iterate through the values of JS Object

for(let key in person){
    console.log(person[key])
}

let person2 = {
    firstName : 'Akshay',
    lastName : 'Gulhane',
    fullname : function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(person2.fullname());




