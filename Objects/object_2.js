// const tinderUser = new Object() // singleton object
const tinderUser = {} // not singleton object

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isloggedin = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)) // return array of keys
// console.log(Object.values(tinderUser)) // return array of values
// console.log(Object.entries(tinderUser)) // return array of array of keys and values

// console.log(tinderUser.hasOwnProperty('isloggedout')) // false

const regularUser ={
    email: "abs@gmail.com",
    fulname: {
            userfullname: {
                fisrtname: "Shivan",
                lastname: "Chowbey"
            }
    }
}

// console.log(regularUser.fulname?.userfullname.fisrtname) // ? indicating availability of fullname in object

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj4 = {4: "e",5: "f"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1, obj2, obj4); // combine objects 

// const obj3 = {...obj1,...obj2,...obj4} // spread method
// console.log(obj3)



const course = {
    coursename: "JS in Hindi",
    price: "9990",
    courseMentor: "Shivam"
}

// const{courseMentor} = course

// console.log(courseMentor); // shivam

const {courseMentor: instructor} = course

console.log(instructor) // shivam



// { // jason API
//     "name": "shivam",
//     "course": "JavaScript",
//     "price": "free"
// }


// [ // Array Api
//     {},
//     {},
//     {}
// ]