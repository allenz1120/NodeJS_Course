const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum)
})




// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Allen', 'Anthony', 'Alex']
// const shortNames = names.filter((name) => { return name.length <= 4 })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lattitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Philly', (data) => {
//     console.log(data);
// })
