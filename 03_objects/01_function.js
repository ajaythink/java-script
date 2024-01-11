function sayMyName(){
    console.log("A");
    console.log("j");
    console.log("a");
    console.log("y");
    console.log("K");
}
//Reference
// sayMyName()

// function addTwoNumber(number1, number2){   //Note: number1 and number2 is "Parameters"
//     console.log(number1 + number2)
// }
// addTwoNumber(3, 5);     //8                 //Note: number1 and number2 is "arguement"

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumber(3, null);     //3

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumber(3, NaN);     //NaN

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumber(3, "A");     //3A

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)    //  8  
// }
// const result = addTwoNumber(3,5);
// console.log("Result", result);     //Result undefined

// function addTwoNumber(number1, number2){
//     let result = number1 + number2
//     return result
// }
// const result = addTwoNumber(5 ,3)
// console.log("Result: "+ result)       //8

function addTwoNumber(number1, number2){
    return  number1 + number2
}
const result = addTwoNumber(5 ,3)
// console.log("Result: "+ result)       //8

// function loginUserMessage(username){
//     return `${username} just logged in`      //Note: backtric is mandatory ( `` )
//     // return '${username} just logged in.'     //${username} just logged in.
//     // return "${username} just logged in"      //${username} just logged in.
// }
// console.log(loginUserMessage("Ajay"));          //Ajay just logged in

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())                 //undefined just logged in
//Note: when no any arguement will pass throw the function so "undefined" will be print 

// This function we write another way
// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter the username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())                 //Please enter the username
                                                //undefined

// Second way to write the avobe function
// function loginUserMessage(username){
//     if(!username){                          //new changes in this function (if condition changes)
//         console.log("Please enter the username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())                     

// third way to write the function
// function loginUserMessage(username = "Ajay"){       // when username will be blank then "Ajay" will be username
//     if(!username){                          //new changes in this function (if condition changes)
//         console.log("Please enter the username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())             //Ajay just logged in

// fourth way to write the function
function loginUserMessage(username = "Ajay"){       // when username will be blank then "Ajay" will be username,
    //but when method will pass the value like "Anirudh" so "Ajay" will not print "Anirudh" will be print.
    if(!username){                          //new changes in this function (if condition changes)
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Anirudh"))             //Anirudh just logged in

// video number 20 chai aur code

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(5));                 // 5 

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(22, 300, 400)); //Item price 22, 300, 400
//Output 22,           but rest of the prince not printed 300, 400

// Passing the multiple value in function
//On the above issue has conter with spread operator, 
// function calculateCartPrice(...num1){       //rest operator 
//     return num1
// }
// console.log(calculateCartPrice(22, 300, 400))  //[ 22, 300, 400 ]


function calculateCartPrice(val1, val2, ...num1){       //rest operator 
    return num1
}
console.log(calculateCartPrice(22, 300, 500, 400))  //[ 500, 400 ]
// in this function 22, 300, value has taken "val1, val2 " variable but rest of the value has taken by num1 ( rest operator)



