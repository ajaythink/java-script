const name = "ajay"
// const repoCount = 50

// console.log(name + repoCount + " Value");// old model
// String pulation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// new model

//String Declare
// const gameName = new String('ajaykr');
// key value pair access;
// console.log(gameName[0]);
// console.log(gameName.__proto__);  //o/p {} type of OBJECT

// console.log(gameName.length);
// console.log(gameName.toUpperCase());  //Non Primitive type example
// console.log(gameName.charAt('3'));
// console.log(gameName.indexOf('k'));

// const newString = gameName.substring(0,3);
// console.log(newString);

// const anotherString = gameName.slice(-3, 1)
// console.log(anotherString);

//25/12/2023
const newGame = new String("AjayKumar");
const anotherGame = newGame.slice(-9, 5)
console.log(anotherGame);
// console.log("ahay");

// const gameName = new String('hitesh-hc')
// const anotherString = gameName.slice(-8, 4) //Reverse order only used here. 
// console.log(anotherString);


// substring
console.log(newGame.substring(0, 4));

console.log(newGame.substring(-9, 3)); //it will no effect on the minus, always substing start from 0 index.

const newStringOne = "  ajay@gmail.com"
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://www.ajay.com/ajay%20kumar"
console.log(url.replace('%20', '_'))

console.log(url.includes('ajay')) //true
console.log(url.includes('mohan')) //false

const gameName = new String('Ajay_kumar')
console.log(gameName.split('_'));