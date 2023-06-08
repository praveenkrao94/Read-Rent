const express = require('express')


require('dotenv').config()
const port = process.env.PORT

const connectDb = require('./db/authConnect')

const cors = require('cors')

const cookieparser = require('cookie-parser')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(cors())   // this helps the backend to allow the request that is sent from front end 

app.use(cookieparser(process.env.SECRET_TOKEN))

app.use('/api/v1/auth', require('./Route/authRoute'))  // for user auth 

app.use('/api/category', require('./Route/categoryRoute'))   /// route for category

app.use('/api/book', require('./Route/bookRoute'))   /// route for Books

app.use('/api/rent', require('./Route/rentRoute'))   /// route for Rent



app.all('**', async (req, res) => {
    return res.status(404).json({ msg: `Requested path not Found` })
})

app.listen(port, async () => {
    console.log(`listed on http://localhost:${port}`)
    await connectDb()
})

