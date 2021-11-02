const character = 'yoduh';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

const circArea = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circArea(6));


let names = ['bob'];
names.push('jesus');

///////////////////////// explicit types
let exString: string;
let exNum: number;
let exBool: boolean;

///////////////////////// arrays
let arr1: string[];
//arr1.push('error'); // will give runtime error 'cannot read property push of undefined'.
let arr2: string[] = []; // initialized and will not error

///////////////////////// union types -- declaring as multiple types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);

///////////////////////// objects
let myObj: object;
myObj = { name: 'yoduh', age: 99 };
let myObj2: { firstName: string, age: number, lastName: string}

///////////////////////// any
let age: any;
age = 'asdf';
age = 23;

let mixedArr: any[] = [];
mixedArr.push(5);
mixedArr.push('asdf');

let anyObj: { name: any, age: any };
anyObj = { name: 'bob', age: 25 };
anyObj = { name: 25, age: 'bob' };

///////////////////////// functions
let greet: Function;

greet = () => {
    console.log("yo");
}

const add = (a: number, b: number, c?: number | string): void => {  // c is optional.  function has strongly typed return type (void)
    console.log(a + b);
    console.log(c);
}
add(2, 2);
//add(3, 'asdf') // error

const addWithDefault = (a: number, b: number = 10) => {  // b is optional and default val is 10 if not provided
    return a + b;
}
let result = addWithDefault(2); // result type becomes inferred as return type (hover mouse over it!)

///////////////////////// aliases
type StringOrNum = string | number;
type ObjWithName = { name: string, uid: StringOrNum };

const logDetails = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
}
const logDetailsAliased = (user: ObjWithName) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
}

///////////////////////// function signatures
let greet1: (a: string, b: string) => void;  // signature
greet1 = (name: string, greeting: string) => {  // implementation
    console.log(`${name} says ${greeting}`)
}

let calc: (a: number, b: number, c: string) => number; // signature
calc = (numOne: number, numTwo: number, action: string) => {  // implementation
    if (action === 'add') {
        return numOne + numTwo;
    }
    return numOne - numTwo;
}

let ageDetails: (obj: {name: string, age: number}) => void;  // signature
type person = {name: string, age: number};
ageDetails = (dude: person) => { // implementation 1
    console.log(`${dude.name} is ${dude.age} years old`);
}
ageDetails = (dude) => { // implementation 2
    console.log(`${dude.name} is ${dude.age} years old`);
}
