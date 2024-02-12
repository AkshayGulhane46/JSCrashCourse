// The JS this keyword which is used in a function refers to the object it belongs to 
// this makes function reusable by letting you decide the object value
// this value is determined entirely by how a function is called


// function sayMyName(name){
//     console.log(`My Name is ${name}`)
// }

// sayMyName('walter White')
// sayMyName('hisenberg')
globalThis.name = 'superman'


// how to determine this hav 4 ways 
// implicit binding
const person = {
    name : 'vishwas',
    sayMyName : function(){
        console.log(`My Name is implicit ${this.name}`)
    }
}
person.sayMyName();

// explicit binding
function sayMyNameExplicit(){
    console.log(`My name is explicitly ${this.name}`)
}
sayMyNameExplicit.call(person);

// new binding
function NewPerson(name){
    this.name = name
}

const p1 = new NewPerson('akshay')
const p2 = new NewPerson('Vaibhav')

console.log(p1.name, p2.name);


// default binding
// fallback binding if others didnt work
sayMyName() // this will return value in global scope