const jwt = require('jsonwebtoken')

const createLoginToken = (id) => {
    return jwt.sign(id, process.env.SECRET_TOKEN, { expiresIn: '3d' })
}

module.exports = { createLoginToken }