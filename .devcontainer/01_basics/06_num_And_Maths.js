const score = 500;
console.log(score);

const balance = new Number(299);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 23.8942;
console.log(otherNumber.toPrecision(3)); // 23.9

const secondNumber = 123.8942;
console.log(secondNumber.toPrecision(3)) // 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString());           //1,000,000
console.log(hundreds.toLocaleString('en-IN'));    //10,00,000


// ************Math*********************
// Math Library by default in JAVASCRIPT
console.log(Math);                                //Object

console.log(Math.abs(-5))       //5 (only sign will change if sign is negative )
console.log(Math.round(4.7))    //5 
console.log(Math.ceil(4.2))     //5
console.log(Math.floor(4.2))    //4
console.log(Math.min(4,3,6,76,2,5,8));  //2
console.log(Math.max(4,3,6,76,2,5,8));  //76

console.log(Math.random());         //0.5155811102975092

console.log(Math.random() * 10 );   //6.956381568131398 ( it is not sure always will be greater then zero)

console.log(Math.random() * 10 + 1);//9.408710555527586 (never will be zero value, always will be greater then zero)
console.log(Math.floor(Math.random() * 10) + 1);    //single digit only

//VVI
const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1));   //8.627415006406942
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //10 <= output >= 20
