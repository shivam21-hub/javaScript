
let a = 300

if(true){
    let a = 30
    const b = 20
    // var c = 10
    // console.log("INNER:",a);
    
}

// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "Shivam"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website);
    
    two()
}

// one()




//***************  Intresting  ***********/

function addone(num){
    return num + 1
}

console.log(addone(3))

// addtwo(5) // give error due to before initialization
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5)) // 7