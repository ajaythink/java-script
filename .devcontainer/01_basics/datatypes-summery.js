//Primitive

// 7 types: String, Number, Boolean, null, undefined, symbol,
//BigInt
const score = 100
const scoreValue = 200.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);
//Regerence type( Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ajay",
    age: 22,
}
const myfuncation = function(){
    console.log("Hello World!");
}
console.log(typeof myfuncation)
console.log(typeof heros);

//ecma website 
//https://262.ecma-international.org/5.1/#sec-11.4.3
// video will be 10 start 