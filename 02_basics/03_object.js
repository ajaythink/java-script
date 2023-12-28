//singleton

//object literals
const mySym = Symbol("key1")        //Symbol Declearation
//How to use symbol as key?

const JsUser = {};          //Empty Object.

const JsUser1 = {
    name: "Ajay ",          //name keyword it treat as string., keys will be say "name"
    "last name" : "Kumar",
    age: 18,
    location: "Bhopal",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    email:"ajay@gmail.com",
    mySym: "newkey",
    [mySym]: "access object with key"
}

// ******Access two way from object *******
console.log(JsUser1.email);         //ajay@gmail.com
console.log(JsUser1["email"])       //ajay@gmail.com
console.log(JsUser1["last name"]);

console.log(JsUser1.mySym);         //newkey
console.log(typeof JsUser1.mySym);   //String type

console.log(JsUser1[mySym]);        //access object with key
console.log(typeof JsUser1[mySym])

// ******change any thing*****
JsUser1.email = "kumar@gmail.com"
console.log(JsUser1["email"])       //kumar@gmail.com

// ********** Freeze************

// Object.freeze(JsUser1)
// JsUser1.email = "mohan@gmail.com"
console.log(JsUser1["email"])       //kumar@gmail.com
console.log(JsUser1)
/*
{
  name: 'Ajay ',
  'last name': 'Kumar',
  age: 18,
  location: 'Bhopal',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  email: 'kumar@gmail.com',
  [Symbol(key1)]: 'access object with key'
}
*/
// *************** Funcation can be treat as variable*****************************
JsUser1.greeting = function(){
    console.log("Hello JS user")
}
console.log(JsUser1.greeting);          //[Function (anonymous)]

console.log(JsUser1.greeting())         //Hello JS user

JsUser1.greetingTwo = function(){
    console.log("Hello JS user",`${JsUser1.location}`);     //same work Perform  
    console.log("Hello JS user",`${this.location}`);        //Same work perform
}
console.log(JsUser1.greetingTwo())         //Hello JS user  Bhopal
170 retrun 24 24
130 going 
26  
26

300 