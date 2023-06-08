const rentRoute = require('express').Router()

const Rentctrl = require('../controller/rentController')


rentRoute.get('/all', Rentctrl.getAll)
rentRoute.get('/single/:id', Rentctrl.getSingle)
rentRoute.post('/create', Rentctrl.create)
rentRoute.patch('/update/:id', Rentctrl.update)
rentRoute.delete('/delete/:id', Rentctrl.delete)


module.exports = rentRoute