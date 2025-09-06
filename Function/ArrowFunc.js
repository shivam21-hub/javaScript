const user = {
    username: "Shivam",
    price: 999,
    emailId: "Shiv@gmail.com",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website` ); // this refers to current context
        
    }
}

// user.welcomeMessage() // Shivam, welcome to website
// user.username = "Sangita"
// user.welcomeMessage() // Sangita, welcome to website

// console.log(this); // {} -> empty object


// function money(){
//     let username = "Shivam"
//     console.log(this.username) // undefined
// }

// money()

// const money = function money(){
//     let username = "Shivam"
//     console.log(this.username) // undefined
// }

const money = () => { // Arrow Function
    let username = "Shivam"
    console.log(this.username) // undefined
    console.log(this) // {}

}

// money()

// const addtwo = (num1, num2) => { // for {} -> return statement is required 
//     return num1 + num2
// }
// console.log(addtwo(5,6)); // 11
 
// const addtwo = (num1, num2) => num1 + num2

const addtwo = (num1, num2) => (num1 + num2) // return statement not required

// console.log(addtwo(5,6)); // 11