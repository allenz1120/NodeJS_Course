const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,minutely,daily&appid=a378ae5e878feab333263975d61975fc&units=imperial"

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined);
        }
        else {
            const message = body.current.weather[0].description + ". It is currently " + body.current.temp + " farenheit out. It feels like " + body.current.feels_like + " farenheit out"
            callback(undefined, message)
        }
    })
}

module.exports = forecast