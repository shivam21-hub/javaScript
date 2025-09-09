const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval 
// }, 0)


// const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Jeans",
        price: 999,
        brand: "Levi's"
    },
    {
        itemName: "Shirt",
        price: 1200,
        brand: "Pepe"
    },
    {
        itemName: "Tshirt",
        price: 600,
        brand: "yoyo"
    }
]

const myTotal = shoppingCart.reduce( (acc, item) => acc + item.price ,0)

console.log(myTotal);
