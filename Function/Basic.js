
function sayMyName(){
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("V")
    console.log("A")
    console.log("M")
}

// sayMyName()

// function add2No(Numbera , Numberb){
//     console.log(Numbera + Numberb)
// }


function add2No(Numbera , Numberb){
    
    return Numbera + Numberb
}


const result = add2No(5, 6)
// console.log("Result:", result)


function loginUserMessage(username= "Shiv"){// shiv is default value to avoid undefined
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shivam")) // shivam just logged in
// console.log(loginUserMessage()) // undefined just logged in


function calculateCartPrice(...num1){ // ... represents combine all num in an Array (It is Rest operator)
    return num1
}

// console.log(calculateCartPrice(200,100,300)) // [[200,100,300]]

const user = {
    username: "Shivam",
    price: 299
}

function handleObject(Anyobject){
    console.log(`Username is ${Anyobject.username} and price is ${Anyobject.price}`);
    
}

// handleObject(user)


const arr = [200, 400, 600, 1000]

function arrayElement(getArr){
    return getArr[2]
}

console.log(arrayElement(arr))