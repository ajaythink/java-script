// globle blcok scope
var c = 300

// start block scope 
if(true){
    let a = 10
    const b = 20
    var c = 30      //classic variable
    d = 40
}
// var avoid to used it?
var c = 4000
// end block scope
// console.log(a)   //ReferenceError: a is not defined
// console.log(b)   //ReferenceError: b is not defined
console.log(c)      //30        c value is printing from block
console.log(d)      //40 without declear varible 

// 15/1/2024
// video number 20
// ******Nested Scope***
function one(){
    const username = "Ajay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);       // We can not access it, website scope is not access out of the block
    
    two()                       
}
// one()

if(true){
    const username = "ajay"
    if(username === "ajay"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);           // scope is not out of inner if condition
}
// console.log(username);

//+++++++++++ Interesting ++++++++ Function Decleration ++++
function addone(num){
    return num + 1;
}
console.log(addone(5))

console.log(addone1(5))
function addone1(num){
    return num + 1;
}

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(6))

console.log(addTwo1(6))         //ReferenceError: Cannot access 'addTwo1' before initialization
const addTwo1 = function(num){
    return num + 2;
}