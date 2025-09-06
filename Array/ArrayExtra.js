const naam = ["Shivam", "Sangita", "Sayam"]
const job = ["Engineer", "Artist", "Doctor"]

// naam.push(job)
// console.log(naam)
// console.log(naam[3][2])

// const all = naam.concat(job)
// console.log(all);

// const all_new = [...naam,...job] // spread method
// console.log(all_new);


const newArr = [1, 2, 3, [4,5,6], [4,9,[6,10,2,1]]]

// const realArr = newArr.flat(Infinity) // infinity represent depth of the array in array
// console.log(realArr);


console.log(Array.isArray("Shivam")) // false
console.log(Array.from("Shivam")) // convert anything into array ['S', 'h', 'i', 'v', 'a', 'm']