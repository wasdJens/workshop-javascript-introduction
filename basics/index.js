/**
 * Variables
 * 
 * Javascript has 3 keywords to declare a variable
 * `var`
 * `let`
 * `const`
 * 
 * `var` should no longer be used in modern javascript
 * 
 * The difference between `let` and `const` is that  `let` allows you to re-assign
 * a value to the variable while `const` is a constant variable and can not be re-assigned
 * a value later on
 */

let date = "2021-01-01";
console.log(date);

date = "2021-04-24";
console.log(date);

const title = "Javascript Basics";
console.log(title);

/**
 * Types
 * 
 * Javascript is dynamically typed this means that you can not declare a type for a 
 * variable and instead it is dynamically typed during runtime
 * 
 * There are 8 Datatypes in javascript
 * 
 * strings - Anything character related - Indicated with "" or ''
 * numbers - Numbers (Includes Integer and Float Values)
 * boolean - Logical operator can only be true or false (1 or 0)
 * null - Special type - Represents nothing, empty or value unknown
 * undefined - No value assigned to a variable
 */

const myString = "Hello World";
const myIntNumber = 25;
const myFloatNumber = 42.42;
const myBoolean = true;
const myNull = null;
const myUndefined = undefined;

let myFirstVariable = "Test";
console.log(myFirstVariable) // "Test"

myFirstVariable = 25;
console.log(myFirstVariable) // 25

/**
 * Objects
 * 
 * The most important structure in Javascript
 * Objects include multiple properties with different values
 * Objects can be nested in multiple objects
 * Objects always have a key and a value 
 * 
 * Properties can be read by using the "." notation
 */

const user = {
    name: "Jens",
    age: 25,
    gender: "m",
    settings: {
        darkmode: false,
    }
}

console.log(user.name) // Jens
console.log(user.settings.darkmode) // false

/**
 * Determine a type in Javascript
 * 
 * Since javascript is dynamically typed we sometimes need to know what type a variable has
 * The operator typeof can be used for this
 */

const price = 25;
console.log(typeof price) // number

/**
 * Conditional Statements
 * 
 * 0, "", null, undefined and NaN are all false if checked
 */

const a = 25;
const b = 100;

if (a < b) {
    console.log('a is smaller than b')
}

let userInput;

if (userInput) {
    console.log(userInput)
} else {
    console.log("User input missing")
}


/**
 * Loops
 * 
 * Sometimes we need to redo the same thing over and over again
 * Javascript supports the following loops: 
 * 
 * for
 * do while
 * while
 */

for(let i = 0; i <= 5; i++) {
    console.log(i) // 0,1,2,3,4,5
}

let i = 0;
while(i <= 5) {
    console.log(i)
    i++ // 0,1,2,3,4,5
}

/**
 * Functions
 * 
 * Functions are the most important part of javascript.
 * 
 * Functions can be declared with two statements in javascript
 * function keyword
 * => arrow function
 * 
 * Functions can accept parameters and return values
 * In Javascript functions can also be declared as a variable
 */

function square(number) {
    return number * number;
}
console.log(square(5)); // 25

const square2 = (number) => number * number;
console.log(square2(5)); // 25

const sum = (a, b) => a + b;
console.log(sum(25, 10)) // 35

/**
 * Arrays
 * 
 * To store a list of information we can declare arrays in Javascript.
 * 
 * Javascript offers a wide range of functions for arrays
 */

const cars = ['Mercedes', 'Audi', 'BMW', 'Volkswagen'];

/**
 * Arrays - Pop & Push
 * 
 * push - New element to the end of an array
 * pop - Remove and return the last element of an array
 */

cars.push('Toyota');
console.log(cars)

cars.pop();
console.log(cars);

/**
 * Arrays - Shift & Unshift
 * 
 * shift - removes the first element and returns it
 * unshift - adds a new element to the beginning of an array
 */

cars.shift();
console.log(cars);

cars.unshift('Mercedes');
console.log(cars);

/**
 * Arrays - Loops
 * 
 * forEach to loop over each item inside an array   
 */

cars.forEach(car => {
    console.log(car);
});

/**
 * Good 2 Know Array Functions
 * 
 * concat, slice, splice, reverse, sort
 */

/**
 * Callback Functions
 * 
 * A function that is passed as an argument to another function
 * The callback function then gets invoked inside the other function
 * 
 * Good 2 Know Array Functions with Callbacks
 * map, filter, every, some
 */

const CARS = cars.map((car) => {
    car.toUpperCase();
})
console.log(CARS);

const onlyMercedes = cars.filter((car) => car === 'Mercedes');
console.log(onlyMercedes);

