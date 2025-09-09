// for of loop

const arr = [1, 2, 3, 4, 5]

for (const index of arr) {
    // console.log(index)
}

const greetings = "Hello World!"
for (const index of greetings) {
    // if(index == " ") continue
    // console.log(`Each char is ${index}`);
    
}

// MAPS Always constains unique values key pair 

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "Umited states of America")
map.set('FR',"France")
map.set('IN', "INDIA") // this india will not be printed

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, '->', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2':'SBA',
    'game3': 'BGMI'
}
// Object is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, '-:', value)
// }
