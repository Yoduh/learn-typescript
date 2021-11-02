///////////////////////// DOM & Type Casting 
const anchor = document.querySelector('a');
// ts doesnt know if anchor is null, and it MIGHT be!
// console.log(anchor.href); // error
const anchor1 = document.querySelector('a'); // let ts know that it wont be null (just trust me ts)
console.log(anchor1.href); // ts infers that this is an anchor element (hover mouse over anchor1!)
const form = document.querySelector('.new-item-form'); // ts cant infer by classname alone, but we can cast it
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
///////////////////////// classes + access modifiers (see ./classes/Invoice.ts)
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice("mario", "work on the kitchen sink", 200);
const invTwo = new Invoice("luigi", "fix toilet", 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// have to use getDetails public method because inv.details is private!
invoices.forEach(inv => {
    console.log(inv.client, inv.getDetails(), inv.amount, inv.format());
});
const me = {
    name: 'bob',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
    // skills: []  // error - doesnt match interface
};
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
// class interface
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
let docs = [];
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
docs.push(docOne);
docs.push(docTwo);
import { ListTemplate } from './classes/ListTemplate.js';
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     amount.valueAsNumber
    // )
    list.render(doc, type.value, 'end');
});
///////////////////////// generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docc = addUID({ name: 'yoshi', age: 40 });
//console.log(docc.name); // error, TS hasn't figured out that the object we get returned has properties other than uid
const genericAddUID = (obj) => {
    // alternative 1: <T extends object> T passed in MUST be object
    // alternative 2: <T extends {name: string}> T passed in MUST be object with at least a name property
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docc2 = genericAddUID({ name: 'yoshi', age: 40 });
console.log(docc2.name);
const docc3 = {
    uid: 1, resourceName: 'person', data: 'alex'
};
const docc4 = {
    uid: 1, resourceName: 'person', data: ['alex', 'bob', 'asdf']
};
///////////////////////// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["ACTOR"] = 4] = "ACTOR";
})(ResourceType || (ResourceType = {}));
const etype = ResourceType.FILM;
console.log(etype); // 2
///////////////////////// tuples
// with array anything can be in any position
let arr = ['test', 25, true];
arr[0] = false;
arr[1] = 'sushi';
let tup = ['sushi', 25, true];
//tup[0] = 23; // error!
let tup2 = [tofrom.value, details.value, amount.valueAsNumber];
//new Invoice(...tup2); // error: spread argument must either have a tuple type or be passed to a rest paramater
let tup3;
tup3 = [tofrom.value, details.value, amount.valueAsNumber];
new Invoice(...tup3);
