const myObject = {
    js: "Javascript",
    cpp: "C plus plus",
    rb: "Ruby",
    py: "Python"
}

for (const key in myObject) {
//    console.log(key) // js cpp rb py
//    console.log(myObject[key]);// Javascript C plus plus Ruby Python
   
}

const myArr = [1, 2, 3, 4, 5]
for (const index in myArr) {
    // console.log(myArr[index]);
    
}

// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "Umited states of America")
// map.set('FR',"France")
// for (const key in map) {
//     console.log(key)
// }