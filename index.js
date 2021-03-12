require('dotenv').config()

// console.log('web 39')

const express = require('express')

const server = express()
server.use(express.json())

console.log('env:',process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') { // on Heroku machine, an env variable is called "NODE_ENV" --< 'production'
    const cors = require('cors')
    server.use(cors())
}

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})