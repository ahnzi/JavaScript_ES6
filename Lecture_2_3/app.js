// function sayHi(aName) {
//     return  "Hello " + aName;
// }

// console.log(sayHi("nico"));

// const sayHi = (aName = "anon") => "hello " + aName;

// console.log(sayHi);

const DEFAULT = "anon";

const sayHi = (aName = DEFAULT) => "hello " + aName;

console.log(sayHi);