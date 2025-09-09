// const coding = ["js", "python", "java", "ruby"]

// const values = coding.forEach( (item)=>{
//     console.log(item);
//     return item;
    
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = myNums.filter( (num) => num > 4) // [5, 6, 7, 8, 9, 10]
// const values = myNums.filter( (num) => { // [5, 6, 7, 8, 9, 10]
//     return num > 4
// })

// const values = []

// myNums.forEach( (num) =>{
//     if(num > 4) {
//         values.push(num)
//     }
// })

// console.log(values);



const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1981, editon: 2004},
    { title: 'Book two', genre: 'Non Fiction', publish: 1992, editon: 2008},
    { title: 'Book three', genre: 'History', publish: 1999, editon: 2007},
    { title: 'Book four', genre: 'Fiction', publish: 1987, editon: 2019},
    { title: 'Book five', genre: 'Science', publish: 2011, editon: 2020},
]

let userBooks = books.filter( (bks) => bks.genre === 'Fiction')

userBooks = books.filter( (bks) => {
    return bks.publish > 1980 && bks.genre === 'Fiction'
})

// console.log(userBooks);
