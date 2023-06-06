const User = require('../model/userModel')

const adminMiddleware = async (req, res, next) => {
    try {
        const id = req.user.id

        const extuser = await User.findById({ _id: id })

        if (!extuser)
            return res.status(404).json({ msg: "User id not Found" })

        if (extuser.role !== 'superadmin')
            return res.json({ msg: "Access denied as you are not a Admin" })

        next()

    }
    catch (err) {
        return res.json({ msg: err.message })
    }

}

module.exports = adminMiddleware