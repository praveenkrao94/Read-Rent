const authRouter = require('express').Router()

const authContoller = require('../controller/authController')

authRouter.post('/register', authContoller.register)

authRouter.post('/login', authContoller.login)

authRouter.get('/logout', authContoller.logout)

authRouter.get('/current/user', authContoller.currentuser)

authRouter.get('/token', authContoller.authtoken)



module.exports = authRouter