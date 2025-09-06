// Immediateli Invoked Function Expression (IIFE)
/* IIFE is used to remove the global scope variable pollution */

(function money(){ // named iife
    console.log(`DB CONNECTED 1`);
    
})(); // ; for end the fist iife otherwise it will not allow to run other iife of the program


//()() // 1st () for function definition and 2nd () for execution call

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})("Shivam")