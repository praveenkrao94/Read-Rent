const bookRoute = require('express').Router()

const bookctrl = require('../controller/BookController')

bookRoute.get('/all', bookctrl.getall)
bookRoute.get('/single/:id', bookctrl.getSingle)
bookRoute.post('/create', bookctrl.create)
bookRoute.patch('/update/:id', bookctrl.update)
bookRoute.delete('/delete/:id', bookctrl.delete)


module.exports = bookRoute