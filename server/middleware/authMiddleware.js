const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    try {

        const token = req.header('Authorization')

        jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
            if (err)
                return res.json({ msg: "unAuthorized Token " })

            // res.json({ user })

            req.user = user     /// assign user to the req 
            next()        // sending data to next controller
        })

        // res.json({ msg: 'authmiddleware called', token })
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
}


module.exports = authMiddleware