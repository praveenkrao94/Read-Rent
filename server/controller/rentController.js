const Rent = require('../model/rentModel')


const Rentctrl = {

    getAll: async (req, res) => {
        try {

            const data = await Rent.find({})
            res.json({ length: data.length, rents: data })
        }
        catch (err) {
            res.json({ msg: err.message })
        }
    },
    getSingle: async (req, res) => {
        try {

            const id = req.params.id

            const extRent = await Rent.findById({ _id: id })

            if (!extRent)
                return res.status(404).json({ msg: "Id not dound" })

            res.json({ extRent })
        }
        catch (err) {
            res.json({ msg: err.message })
        }
    },
    create: async (req, res) => {
        try {
            const extrent = await Rent.findOne({ userId: req.body.userId } && { bookId: req.body.bookId })
            if (extrent)
                return res.json({ msg: "You have already Rented this book" })

            const createRent = await Rent.create(req.body)
            return res.status(200).json({ rent: createRent, msg: "You have Successfully Rented this Book" })
        }
        catch (err) {
            res.json({ msg: err.message })
        }
    },
    update: async (req, res) => {
        try {

            const id = req.params.id

            const extRent = await Rent.findById({ _id: id })
            if (!extRent)
                return res.json({ msg: "Enter a Valid Id" })

            // if (!(extRent.bookId === req.body.bookId && extRent.userId === req.body.userId))
            //     return res.json({ msg: 'Entered Userid or BookId does not Match' })

            if (extRent.bookId === req.body.bookId && extRent.userId === req.body.userId)
                return res.status(400).json({ msg: 'Already You have rented this book' })



            const updateRent = await Rent.findByIdAndUpdate({ _id: id }, {
                amount: req.body.amount,
                returndate: req.body.returndate,
                paymentStatus: req.body.paymentStatus
            })
            res.json({ msg: "Your Rental info has been Updated Successfully", updateRent })
        }
        catch (err) {
            return res.json({ msg: err.message })
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id

            const extRent = await Rent.findById({ _id: id })
            if (!extRent)
                return res.json({ msg: "Enter a Valid Id" })

            const DeleteRent = await Rent.findByIdAndDelete({ _id: id })
            res.json({ msg: "Your Rental info has been Deleted Successfully", DeleteRent })
        }
        catch (err) {
            return res.json({ msg: err.message })
        }
    },
}

module.exports = Rentctrl