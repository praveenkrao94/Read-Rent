
const User = require('../model/userModel')

const bcrypt = require('bcryptjs')

const { createLoginToken } = require('../util/token')

const jwt = require('jsonwebtoken')

const authController = {

    register: async (req, res) => {
        try {
            const { name, email, mobile, password } = req.body

            const encrypt = await bcrypt.hash(password, 10)

            const extemail = await User.findOne({ email })
            if (extemail)
                return res.status(404).json({ msg: `email address ${email} already exist` })

            const extname = await User.findOne({ name })
            if (extname)
                return res.status(404).json({ msg: `name ${name} already exists` })

            const newUser = await User.create(
                {
                    name,
                    email,
                    mobile,
                    password: encrypt
                }
            )

            res.json({ msg: "register successfully", data: newUser })
        }
        catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },


    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const extuser = await User.findOne({ email })
            if (!extuser)
                return res.status(404).json({ msg: `${email} does not exist` })

            const passwordCheck = await bcrypt.compare(password, extuser.password)
            if (!passwordCheck)
                return res.status(401).json({ msg: "password Does not match" })
            if (!extuser.isActive)
                return res.json({ msg: `Hi ${extuser.name} your account has been blocked` })

            // res.json({ msg: extuser })   to check data 

            const token = createLoginToken({ id: extuser._id })  // this createLogintoken is a function created from token.js 

            // Create cookie
            res.cookie("loginToken", token, {
                httpOnly: true,
                signed: true,
                path: `/api/v1/auth/token`,
                maxage: 1 * 24 * 60 * 60 * 1000
            })

            res.json({ msg: "Login successfull", token })
        }
        catch (err) {
            res.status(500).json({ msg: err.message })
        }

    },

    logout: async (req, res) => {
        try {
            res.clearCookie('loginToken', { path: '/api/v1/auth/token' })
            res.json({ msg: "Logout Successfully" })
        }
        catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },

    currentuser: async (req, res) => {
        try {
            const data = await User.findById({ _id: req.user.id }).select('-password')
            if (!data)
                return res.json({ msg: "User not Found" })

            res.json({ data })

            res.json({ msg: req.user })
        }
        catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },

    authtoken: async (req, res) => {
        try {
            const cToken = req.signedCookies.loginToken   // to read the cookies 

            if (!cToken)
                return res.status(404).json({ msg: "Token not Found .. Session Expired" })

            // verify the token//

            jwt.verify(cToken, process.env.SECRET_TOKEN, (err, user) => {
                if (err)
                    return res.json({ msg: 'Invalid token' })

                const rToken = createLoginToken({ id: user.id })   // this user.id is that call back (user) id that we get 

                res.status(200).json({ AuthToken: rToken })
            })


            // res.json({ cToken })
        }
        catch (err) {
            return res.status(500).json({ msg: err.message })

        }
    },
}

module.exports = authController


