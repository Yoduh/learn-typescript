///////////////////////// DOM & Type Casting 
const anchor = document.querySelector('a');
// ts doesnt know if anchor is null, and it MIGHT be!
// console.log(anchor.href); // error

const anchor1 = document.querySelector('a')!; // let ts know that it wont be null (just trust me ts)
console.log(anchor1.href); // ts infers that this is an anchor element (hover mouse over anchor1!)

const form = document.querySelector('.new-item-form') as HTMLFormElement; // ts cant infer by classname alone, but we can cast it
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

///////////////////////// classes + access modifiers (see ./classes/Invoice.ts)
import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice("mario", "work on the kitchen sink", 200);
const invTwo = new Invoice("luigi", "fix toilet", 350);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// have to use getDetails public method because inv.details is private!
invoices.forEach(inv => {
    console.log(inv.client, inv.getDetails(), inv.amount, inv.format());
})

///////////////////////// interfaces
// object interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'bob',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log("I spent", amount);
        return amount;
    },
    // skills: []  // error - doesnt match interface
};

const greetPerson = (person: IsPerson) => {
    console.log("hello ", person.name);
}

greetPerson(me);

// class interface
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;
let docs: HasFormatter[] = [];

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
docs.push(docOne); 
docs.push(docTwo);


import { ListTemplate } from './classes/ListTemplate.js';
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     amount.valueAsNumber
    // )
    list.render(doc, type.value, 'end');
})

///////////////////////// generics
const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid }
}
let docc = addUID({name: 'yoshi', age: 40 });
//console.log(docc.name); // error, TS hasn't figured out that the object we get returned has properties other than uid

const genericAddUID = <T>(obj: T) => { // captures specifics of the type T passed in
    // alternative 1: <T extends object> T passed in MUST be object
    // alternative 2: <T extends {name: string}> T passed in MUST be object with at least a name property
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid }
}
let docc2 = genericAddUID({name: 'yoshi', age: 40 });
console.log(docc2.name);

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T; 
}
const docc3: Resource<string> = {
    uid: 1, resourceName: 'person', data: 'alex'
}
const docc4: Resource<string[]> = {
    uid: 1, resourceName: 'person', data: ['alex', 'bob', 'asdf']
}

///////////////////////// enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, ACTOR }
const etype: ResourceType = ResourceType.FILM;
console.log(etype) // 2

///////////////////////// tuples
// with array anything can be in any position
let arr = ['test', 25, true];
arr[0] = false;
arr[1] = 'sushi'

let tup: [string, number, boolean] = ['sushi', 25, true]
//tup[0] = 23; // error!

let tup2 = [tofrom.value, details.value, amount.valueAsNumber];
//new Invoice(...tup2); // error: spread argument must either have a tuple type or be passed to a rest paramater
let tup3: [string, string, number];
tup3 = [tofrom.value, details.value, amount.valueAsNumber];
new Invoice(...tup3);