const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=82f6f16d46c62907ab24f177a3b22306&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined);
        }
        else {
            const message = body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " farenheit out. It feels like " + body.current.feelslike + " farenheit out"
            callback(undefined, message)
        }
    })
}

module.exports = forecast