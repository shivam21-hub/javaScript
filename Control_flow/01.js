// if statement

// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


//   INPORTANT

// const userEmail = "Shiv@gmail.com"

// if(userEmail){
//     console.log("Got user Eamil"); // it will be executed
    
// }
// else{
//     console.log("Dont have user email");
    
// }


/* FALSY Values

false, 0, -0, BigInt 0n, "", null, undefined, NaN
 

other than these values all are true values
 "0", "false", " ", [], {}, function(){}
*/

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){ // true
//     console.log("I LOVE YOU");
    
// }



// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 15 // always true value i.e 10 

console.log(val1);

