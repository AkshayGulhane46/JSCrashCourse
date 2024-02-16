console.log("you are under classes")

module.exports = class Person {
    // this is how we define objeects in class
    age = 25
    // location = "canada"
    get location()
    {
        return 'canada'
    }
    // constructor is a method which executes by default when you create objects
    constructor(firstName,lastName){
        this.firstName = firstName
        // this is a current class object
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName + this.lastName)
    }
}


// commented this code because I have exported this for using in inheritence.js class

// let person = new Person("aksay","gulhane")
// console.log(person.age)

// console.log(person.location)

// console.log(person.fullName())
// we are sennding the args from line 25 at runtime to constructor 
// constructor will assign values and when the fullname() will run
// it will give the proper values

// let person2 = new Person("Nancy","Shukla")
// console.log(person2.fullName())


