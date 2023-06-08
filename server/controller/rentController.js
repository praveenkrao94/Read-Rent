const Rent = require('../model/rentModel')


const Rentctrl = {

    getAll: (req, res) => {
        try {
            res.json({ msg: "get all called" })
        }
        catch (err) {
            res.json({ msg: err.message })
        }
    },
    getSingle: (req, res) => {
        try {
            res.json({ msg: "getSingle called" })
        }
        catch (err) {
            res.json({ msg: err.message })
        }
    },
    create: (req, res) => {
        try {
            res.json({ msg: "create called" })
        }
        catch (err) {
            res.json({ msg: err.message })
        }
    },
    update: (req, res) => {
        try {
            res.json({ msg: "update called" })
        }
        catch (err) {
           return res.json({ msg: err.message })
        }
    },
    delete: (req, res) => {
        try {
            res.json({ msg: "delete called" })
        }
        catch (err) {
            return res.json({ msg: err.message })
        }
    },
}

module.exports = Rentctrl