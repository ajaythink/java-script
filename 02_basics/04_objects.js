const tinderUser = new Object();
console.log(tinderUser);        //{}   Empty Object, Singleton Object.

const tinderUser1 = {};         //Internaly no difference, but this is non Singleton Object
console.log(tinderUser1);
 
tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

console.log(tinderUser)         //{ id: '123abc', name: 'Sunny', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName:{
            firstName:"Ajay",
            lastName:"Kumar"
        }
    }
}

// **************Access Value ************************

console.log(regularUser.fullname)                           //{ userFullName: { firstName: 'Ajay', lastName: 'Kumar' } }
console.log(regularUser.fullname.userFullName.firstName)    //Ajay

// ******************Object combine********************

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const mergeObject = obj1.concat(obj2);           //Not will work (TypeError: obj1.concat is not a function)
// console.log(mergeObject);

// const mergeObject = [...obj1, ...obj2];          //not will work(TypeError: obj1 is not iterable)
// console.log(mergeObject)

// console.log(obj1 + obj2)                     //[object Object][object Object]

//const mergeObject = { obj1, obj2};
//console.log(mergeObject)                        //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//Spread Operator
const mergeObject1= {...obj1, ...obj2}
console.log(mergeObject1)                          //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const mergeObject = Object.assign(obj1, obj2)       //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(mergeObject)

const obj3 = Object.assign({}, obj1, obj2 )         //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3)                                   //good way to merge Objects, with {} 


// When value come from database, Array of Object 
const user = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    }
]

user[1].email
console.log(tinderUser)                 //{ id: '123abc', name: 'Sunny', isLoggedIn: false }
console.log(Object.keys(tinderUser))    //[ 'id', 'name', 'isLoggedIn' ]    All printed as Arrays Form
console.log(Object.values(tinderUser))  //[ '123abc', 'Sunny', false ]
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sunny' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))        //true    find property is available or not

// 16/01/2024
const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ajay"
}
// ********Object d-Structure**********************
console.log(course.courseInstructor)      // ajay             1st way to access, correct Syntex

const {courseInstructor} = course
console.log(courseInstructor)           // ajay             2nd way to access,

const {courseInstructor: Instructor} = course   //3rd way to access
console.log(Instructor)                 //ajay 

// *************Pro P S *********REACT*******
const navbar = (props.company) => {

}
navbar(company = "TCS")
// *********************D-Structuring***************
const navbar1 = ({company1}) => {

}
navbar(company1 = "TCS")

// **************API**********************
// Before API was in XML
// Now API is in JSON
// ignor error here 
// this is api request in OBJECT form
// in side api all key will be treat as string and value also will treat as String


// {
//     "name" : "ajay",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// ******************Second way to ************* look of api request**********8
[
    {}
    {}
    {}

]

// this is from random use me api, I can take source code
// https://randomuser.me/api/


// Check all what is api is giving to us via source code
// https://jsonformatter.org/
