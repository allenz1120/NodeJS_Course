const path = require('path')
const express = require("express")

const app = express() //doesn't take in args
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))


//app.com/weather
app.get('/weather', (req, res) => {
    res.send(
        {
            forecast: 'sunny',
            location: 'new york'
        }
    )
})

//starts server (args=port,callback function for when server starts)
app.listen(3000, () => {
    console.log("server is live on port 3000")
})