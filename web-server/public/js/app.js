console.log("clientside js running")



const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

message1.textContent = ''
message2.textContent = ''


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElement.value
    message1.textContent = 'loading...'
    message2.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            }
            else {
                message1.textContent = data.location
                message2.textContent = data.forecast
            }
        })
    })
})