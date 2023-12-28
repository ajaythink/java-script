//array

const myArray = [0,1,2,3,4,5]

const myHeros = ["shktiman", "naagraj"];

const myArray2 = new Array(2,3,5,6);
console.log(myArray2[2])
console.log(myArray[0]);

//***********Array Method************ */
myArray.push(6);
myArray.push(23);
myArray.pop();
console.log(myArray);

// myArray.unshift(34);
console.log(myArray);

myArray.shift();    // Array first element it will be remove
console.log(myArray);

console.log(myArray.includes(3));
console.log(myArray.indexOf(4));

const newArray = myArray.join();
console.log(myArray);       // Array as it is.
console.log(newArray);      // Type has changed

// **************slice, splice************** VVI interview Purpose
// const myArray = [0,1,2,3,4,5]
console.log("A ", myArray);         //A  [ 1, 2, 3, 4, 5, 6 ]
const myn1 = myArray.slice(1, 3);    
console.log(myn1);                  //[ 2, 3 ]

console.log("B ", myArray);         //B  [ 1, 2, 3, 4, 5, 6 ]
const myn2 = myArray.splice(1, 3);   
console.log("C ", myArray);         //C  [ 1, 5, 6 ]
console.log(myn2);                  //[ 2, 3, 4 ]

