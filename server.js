const express = require('express')
const server = express()

// 
// Static file directory configuration.
// 
server.use('dir', express.static('public'))

//
// Configure Middleware to handle POST requests.
//
server.use(express.urlencoded({extended: false}))

// 
// Root directory route.
// 
server.get('/', (req, res) => {
    res.send('Hello out there!')
})

// 
// /register route.
// 
server.get('/register', (req, res) => {
    res.send('Register')
})

// 
// /login route.
// 
server.get('/login', (req, res) => {
    res.send('Login')
})

// 
// /profile with name query string route.
// 
server.get('/profile', (req, res) => {
    const name = req.query.name
    res.send(name)
})

// 
// /profiles parameter route.
// 
server.get('/profiles/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send('Silvia')
})

//
// /get-compliment post route.
//
server.post('/get-compliment', (req, res) => {
	const name = req.body.name
    const place = req.body.place
    res.send(`Hi ${name}, Welcome to the ${place}!`)
})

module.exports = server