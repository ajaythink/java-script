const user = {
    username : "Ajay",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()           //Ajay, Welcome to website
user.username = "Prince"
// user.welcomeMessage()           //Prince, Welcome to website
//this key word is reffer to the current veriable.

// This output from line 7 , console.log(this);
// Ajay, Welcome to website
// {
//   username: 'Ajay',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// Prince, Welcome to website
// {
//   username: 'Prince',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// if I comment user.welcomeMessage(), function and then console.log(this);
// console.log(this);          // output {}


function chai(){
    //console.log(this)
}
chai()

// this output from chai function 

// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }

function chai1(){
    let username1 = "Ajay"
    // console.log(this.username1)   
} 
chai1();
// output form 61 line
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }
// undefined

const chai3= function (){
    
    console.log(this);
}
chai3()                 // long Object Globle something output


function chai4(){
    let username = "Ajay "
    console.log(this.username)
}
chai4()                 // undefined

const chai5 = function(){
    let username = "Ajay"
    console.log(this.username);
}
chai5()                 //undefined

const chai6 = () => {
    let username = "Ajay"
    console.log(this.username);
}
chai6()                 //undefined

const chai7 = () => {
    console.log(this);
}
chai7()                 //{}

//  Arrow function store in variable
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(4,6));       //10

// ******** Arrow function emplicit return mean No need to write Return keyword *****
const addTwo1 = (num1, num2) => num1 + num2
console.log(addTwo1(4, 6));      //10

const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo2(4, 6))      //10

const addTwo3 = (num1, num2) => {num1 + num2} 
console.log(addTwo3(2,5));      //undefined

const addTwo4 = (num1, num2) => ({username: "Ajay"}) 
console.log(addTwo4(5, 5));       //{ username: 'Ajay' }

const myArray = [2, 5, 3, 6, 8]
// myArray.forEach(function(){})
// myArray.forEach( ()=> {})
// myArray.forEach( () => ())


