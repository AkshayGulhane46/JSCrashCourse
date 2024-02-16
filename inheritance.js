// one class can inherit/acquire the properties and methods of a another class
// the class which inherits the properties of another is knows an subclass
// the class whose properties are inherited is known as superclass

const Person = require("./classes")
// Person is a class which is written in classes.js
// we are using the classes.js
class Pet extends Person 
{
    get Location(){
        return "bluecross"
    }
    // first thing to do here is call the parent class constructor
    constructor(firstName,lastName){
        // call the parent class constructor 
        super(firstName, lastName)
    }

}

let pet = new Pet("eva","gulhane")
console.log(pet.fullName())

