"use strict";
const character = 'yoduh';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
const circArea = (diameter) => {
    return diameter * Math.PI;
};
console.log(circArea(6));
let names = ['bob'];
names.push('jesus');
///////////////////////// explicit types
let exString;
let exNum;
let exBool;
///////////////////////// arrays
let arr1;
//arr1.push('error'); // will give runtime error 'cannot read property push of undefined'.
let arr2 = []; // initialized and will not error
///////////////////////// union types -- declaring as multiple types
let mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
///////////////////////// objects
let myObj;
myObj = { name: 'yoduh', age: 99 };
let myObj2;
///////////////////////// any
let age;
age = 'asdf';
age = 23;
let mixedArr = [];
mixedArr.push(5);
mixedArr.push('asdf');
let anyObj;
anyObj = { name: 'bob', age: 25 };
anyObj = { name: 25, age: 'bob' };
///////////////////////// functions
let greet;
greet = () => {
    console.log("yo");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(2, 2);
//add(3, 'asdf') // error
const addWithDefault = (a, b = 10) => {
    return a + b;
};
let result = addWithDefault(2); // result type becomes inferred as return type (hover mouse over it!)
const logDetails = (user) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
};
const logDetailsAliased = (user) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
};
///////////////////////// function signatures
let greet1; // signature
greet1 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc; // signature
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    return numOne - numTwo;
};
let ageDetails; // signature
ageDetails = (dude) => {
    console.log(`${dude.name} is ${dude.age} years old`);
};
ageDetails = (dude) => {
    console.log(`${dude.name} is ${dude.age} years old`);
};
