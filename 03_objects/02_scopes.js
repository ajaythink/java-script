// globle blcok scope
var c = 300

// start block scope 
if(true){
    let a = 10
    const b = 20
    var c = 30      //classic variable
    d = 40
}
var c = 4000
// end block scope
// console.log(a)   //ReferenceError: a is not defined
// console.log(b)   //ReferenceError: b is not defined
console.log(c)      //30        c value is printing from block
console.log(d)      //40 without declear varible 
