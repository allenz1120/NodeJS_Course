const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }


// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

//fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Allen'
data.age = '19'
const dataJSON2 = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON2)
