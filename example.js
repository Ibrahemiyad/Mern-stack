let x = 10;
let y = 20;
let z =30;
console.log(x + y + z);



const beatles = ['John', 'Paul', 'George', 'Ringo'];
function printNames(names){
    function actualPrint(){
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            console.log(name + " is a member of the Beatles." + index);
        }
    }
    actualPrint();
}
printNames(beatles);


// hoisting example

var magicalUnicorns;
console.log(magicalUnicorns);
magicalUnicorns = "Unicorns are real.";

var foo;
function magic() {
    var foo;
    foo = "hello world";
    console.log(foo);
}
foo = "bar"
magic();
console.log(foo);



// destructuring example
const person = {
    firstName: "John",
    lastName: "Doe",
    email: 'bob@gmail.com',
    password: '123456',
    userName: 'john_doe',
    addresses:[
        {
            adress: "123 Main St",
            city: "Anytown",
            zipcode:"20500",
        },
        {
            adress: "456 Elm St",
            city: "Othertown",
            zipcode:"20501",
        }
    ],
    createdAt: 1543945177632
};
const {addresses: [whiteHouse, sherlock]} = person;
console.log(whiteHouse);

const { addresses: [,{city:Othertown}]} = person;
console.log(Othertown);


const animals = ['dog', 'cat', 'fish', 'bird'];

const {email} = person;
const{firstAnimal} = animals;
console.log(email);
console.log(firstAnimal);


// arrow function example
var sayHello = function(name) {
    console.log("Hello, " + name + "!");
}
const sayHello = (name)=> {
    console.log("Hello ${name}!");
}

var square = function(x) {
    return x * x;
}
const square = x => x * x;


// classes Example 

class Vehicle {
    constructor(manufacturer, model, color){
        this.miles= 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }
    drive(){
        this.miles += 10;
        console.log(`The ${this.color} ${this.manufacturer} ${this.model} drives 10 miles.`);
    }
    parentFunction(){
        return "This is coming from parent "
    }
}
const car = new Vehicle("Toyota", "Camry", "Blue");
car.drive();
console.log(car.miles);


class Camry extends Vehicle {
    constructor(color){
        super("Toyota", "Camry", color);
    }
    childFunction(){
        const message = super.parentFunction();
        console.log(message);
    }
}
const camry = new Camry("Red");
camry.childFunction();
console.log(camry);

