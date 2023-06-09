const rentRoute = require('express').Router()

const Rentctrl = require('../controller/rentController')

const authmiddleware = require('../middleware/authMiddleware')

const adminMiddleware = require('../middleware/adminMiddleware')


rentRoute.get('/all', authmiddleware, adminMiddleware, Rentctrl.getAll)
rentRoute.get('/single/:id', authmiddleware, adminMiddleware, Rentctrl.getSingle)
rentRoute.post('/create', authmiddleware, adminMiddleware, Rentctrl.create)
rentRoute.patch('/update/:id', authmiddleware, adminMiddleware, Rentctrl.update)
rentRoute.delete('/delete/:id', authmiddleware, adminMiddleware, Rentctrl.delete)


module.exports = rentRoute