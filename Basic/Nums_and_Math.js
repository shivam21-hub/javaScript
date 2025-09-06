/*************NUMBERS **********/

const score = 400

// console.log(score) // 400

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString()) // 100
// console.log(balance.toFixed(3)) // 100.000


const otherNum = 123.9849
// console.log(otherNum.toPrecision(3))

const hundred = 10000000

// console.log(hundred.toLocaleString()); // 10,000,000
// console.log(hundred.toLocaleString('en-IN')); // 1,00,00,000


/************** MATHS *********/


// console.log(Math);

// console.log(Math.abs(-100)) // 100
// console.log(Math.round(10.8585)) // Return values to nearest Inreger 


console.log(Math.random()) // Any random value b/w 0 & 1 
console.log((Math.random()*10) + 1) // Any random value b/w 1 & 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Min value will always be 10

