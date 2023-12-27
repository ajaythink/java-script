// Dates

let myDate = new Date();
console.log(myDate);    //2023-12-26T09:43:38.083Z
console.log(myDate.toString());     //Tue Dec 26 2023 09:45:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Tue Dec 26 2023
console.log(myDate.toLocaleString());   //12/26/2023, 9:47:54 AM

console.log(typeof myDate);         //Object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate);         //2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let myCreatedDateSecond = new Date(2023, 0, 23, 5, 3, 39);
console.log(myCreatedDateSecond.toLocaleString());      //1/23/2023, 5:03:39 AM

let myCreatedDateThird = new Date("2023-12-26");
console.log(myCreatedDateThird.toLocaleString());       //12/26/2023, 12:00:00 AM

let myCreatedDateFour = new Date("01-15-2023");
console.log(myCreatedDateFour.toLocaleString());        //1/15/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);                               //1703587305477
console.log(myCreatedDateFour.getTime());               //1673740800000
console.log(Math.floor(Date.now()/1000));               //1703587305 in second 

let newDate = new Date();
console.log(newDate);                                   //2023-12-26T10:44:38.521Z
console.log(newDate.getMonth());                        //11
console.log(newDate.getDay());                          //2

newDate.toLocaleString('default',{
    weekday:"long"
    
})

