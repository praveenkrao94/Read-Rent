const catRoute = require('express').Router()

const categoryCtrl = require('../controller/categoryController')

const adminMiddleware = require('../middleware/adminMiddleware')

const authmiddleware = require('../middleware/authMiddleware')


catRoute.get('/all', authmiddleware, adminMiddleware, categoryCtrl.getall)
catRoute.get('/single/:id', authmiddleware, adminMiddleware, categoryCtrl.getSingle)
catRoute.post('/create', authmiddleware, adminMiddleware, categoryCtrl.create)
catRoute.patch('/update/:id', authmiddleware, adminMiddleware, categoryCtrl.update)
catRoute.delete('/delete/:id', authmiddleware, adminMiddleware, categoryCtrl.delete)



module.exports = catRoute