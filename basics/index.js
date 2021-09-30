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
 */

const myString = "Hello World";
const myIntNumber = 25;
const myFloatNumber = 42.42;
const myBoolean = true;
const myNull = null;