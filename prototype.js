function Person(firstName , lastName){
    this.fName =  firstName
    this.Lname = lastName
}

const person1 = new Person('peter', 'parker')
const person2 = new Person('bruce', 'wayne')

person1.getFullName = function(){
    return this.fName +' '+this.Lname
}

console.log(person1.getFullName());

// we want this function to work for every peroson 
// we use prototype to made this object available for all the objects
Person.prototype.getfullNamesOfAll = function(){
    return this.fName + ' ' + this.Lname
}
console.log(person1.getfullNamesOfAll());
console.log(person2.getfullNamesOfAll());

