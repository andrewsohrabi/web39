require('dotenv').config()

console.log('web 39')

const express = require('express')

const server = express()
server.use(express.json())

console.log('environment:',process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') { // on Heroku machine, an env variable is called "NODE_ENV" --< 'production'
    const cors = require('cors')
    server.use(cors())
}


