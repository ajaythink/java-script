//  Immediately Invoked Funciton Expressions (IIFE)
// Globle scope ke pollution se problem hoti hai kai baar to globle scope ke variable and decleartion
// and pollution ko hata ne liye IIFE used kiye hai

function one(){
    //named IIFE
    console.log(`DB CONNECTED`)
}
one();

(function two(){
    console.log(`DB CONNECTED`)
})();

(() =>{})();

(() => {
    console.log(`DB CONNECTED`)
})();

((name) => {
    //uNamed IIFE
    console.log(`DB CONNECTED, ${name}`)
})('Ajay');

