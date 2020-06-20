const path = require('path')
const express = require("express")

const app = express() //doesn't take in args
const publicDirPath = path.join(__dirname, '../public')
//this is optional (allows you to call views directory by another name) Make sure you use app.set('views',viewsPath)
const viewsPath = path.join(__dirname, '../templates')

//express needs the first key to be view engine and second to be hbs
//this sets up handlebars
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Allen Zou'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Allen Zou'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'This is the help message'
    })
})


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