const catRoute = require('express').Router()

const categoryCtrl = require('../controller/categoryController')



catRoute.get('/all', categoryCtrl.getall)
catRoute.get('/single/:id', categoryCtrl.getSingle)
catRoute.post('/create', categoryCtrl.create)
catRoute.patch('/update/:id', categoryCtrl.update)
catRoute.delete('/delete/:id', categoryCtrl.delete)



module.exports = catRoute