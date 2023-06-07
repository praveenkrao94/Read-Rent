const Book = require('../model/BookModel')

const bookctrl = {
    getall: (req, res) => {
        try {
            res.status.json({ msg: "get all called" })
        }
        catch (err) {
            res.josn({ msg: err.message })
        }
    },
    getSingle: (req, res) => {
        try {
            res.status.json({ msg: "getSingle called" })

        }
        catch (err) {
            res.josn({ msg: err.message })

        }
    },
    create: (req, res) => {
        try {

            res.status.json({ msg: "create called" })
        }
        catch (err) {
            res.josn({ msg: err.message })

        }
    },
    update: (req, res) => {
        try {
            res.status.json({ msg: "update called" })

        }
        catch (err) {
            res.josn({ msg: err.message })

        }
    },
    delete: (req, res) => {
        try {

            res.status.json({ msg: "delete called" })
        }
        catch (err) {
            res.josn({ msg: err.message })

        }
    },

}

module.exports = bookctrl