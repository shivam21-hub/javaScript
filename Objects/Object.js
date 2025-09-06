// Singleton
// Object.create

// object literals

const mySym = Symbol("KEY1")

const JsUser = {
    name: "Shivam",
    "Full name": "Shivam Chowbey",
    age: 21,
    [mySym]: "MyKey1", // Symbol syntex
    company: "Google",
    location: "Kolkata",
    isLogged: false,
    lastlogged: ["Monday", "Friday"]
}

// console.log(JsUser)
// console.log(JsUser.name); // Shivam
// console.log(JsUser["name"]);// Shivam
// console.log(JsUser["Full name"]); // cant be access with dot operator
// console.log(JsUser[mySym])


JsUser.greeting = function(){
    console.log("Hello! JS User")
}

console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`Hello! JS User, ${this.name}`)
}
console.log(JsUser.greeting2())