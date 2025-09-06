
const arr = [0, 1, 2, "Shivam", true]
// console.log(arr[3])

// Array Methods

// arr.push("Sangita")
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(10) // push element at 0 index
// console.log(arr);

// arr.shift() // remove element from 0 index
// console.log(arr);

// const newArr = arr.join()
// console.log(newArr); // convert array into string
// console.log(typeof newArr); // string


// SLICE & SPLICE

console.log("A", arr); // original Array

const narr = arr.slice(1, 3) // doesnot manipulate original Array
console.log(narr) // [1,2]
console.log("B", arr); // still oroginal Array

console.log(arr.splice(1,3)) // manipulate original Array
console.log("C",arr) // original arry -> [0,true] only