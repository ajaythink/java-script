let score = "33"
console.log(typeof score) //number type
console.log(typeof (score)) //number type


let valueInNumber = Number(score) //type casting
console.log(typeof valueInNumber)

console.log(valueInNumber) // o/p 33

let score1 = "33abc"
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1) // NaN = Not a Number

//if value will null assign
let score2 = null
let valueInNumber2 = Number( score2)
console.log(valueInNumber2)
console.log(typeof valueInNumber2)

//boolean
let booleanLoged = "Ajay"
let booleanIsLogedIn = Boolean(booleanLoged)
console.log(typeof booleanIsLogedIn)


