//Object Property Shorthand
const name = "Allen"
const userAge = 19

const user = {
    name,
    age: userAge,
    location: 'New York'
}
console.log(user)

//Object Destructuring
const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const { label: productLabel, stock, rating } = product
// console.log(productLabel, stock, rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)