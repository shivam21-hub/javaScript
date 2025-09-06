// let myDate = new Date()
// console.log(myDate) // 2025-09-06T03:19:19.972Z
// console.log(myDate.toString()); // Sat Sep 06 2025 03:20:18 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sat Sep 06 2025 
// console.log(myDate.toISOString()) // 2025-09-06T03:21:26.118Z
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString()); // 9/6/2025, 3:24:24 AM
// console.log(myDate.toLocaleDateString()); // 9/6/2025
// console.log(typeof myDate) // object

// let myCreatedDate = new Date(2032, 5, 24) // year start from 0 month
let myCreatedDate = new Date("2025-5-14") // year start from 0 month

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // time in miliseconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getTimezoneOffset())
console.log(newDate.getFullYear())



