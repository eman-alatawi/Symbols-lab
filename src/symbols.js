//Creating symbols
const emp1 = Symbol();
const emp2 = Symbol();
console.log(emp1 == emp2);
console.log(typeof (emp1));
console.log(typeof (emp2));

//Globally-registered symbols
const Alex = Symbol.for('emp');
const Rachel = Symbol.for('emp');
console.log(Alex == Rachel);
console.log(Symbol.keyFor(Rachel));

//Well-known symbols
const workingDays = ['Monday', 'Wednesday', 'Friday'];
const iterator = workingDays[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//Symbol as property key
const salary = Symbol();
let obj = {};
obj[salary] = 10000;
console.log(obj[salary]);

//Converting Symbol into String
let id = Symbol("id");
console.log(id.toString());