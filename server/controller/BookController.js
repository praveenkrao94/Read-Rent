const Book = require('../model/BookModel')

const bookctrl = {
    getall: async (req, res) => {
        try {
            const data = await Book.find({})

            res.status(200).json({ length: data.length, books: data })
            // res.status(200).json({ msg: "get all called" })
        }
        catch (err) {
            res.json({ msg: err.message })
        }
    },
    getSingle: async (req, res) => {
        try {
            let id = req.params.id
            const data = await Book.findById({ _id: id })

            if (!data)
                return res.json({ msg: "Requested Id not Found" })

            res.status(200).json({ book: data })

        }
        catch (err) {
            res.json({ msg: err.message })

        }
    },
    create: async (req, res) => {
        try {
            if (!req.body.isbn)
                return res.status(404).json({ msg: "ISBN number is required" })

            let extbook = await Book.findOne({ isbn: req.body.isbn })
            if (extbook)
                return res.json({ msg: "Existing alocated ISBN" })
            let newItem = await Book.create(req.body)

            res.status(200).json({ msg: "new Book created successfully", book: newItem })
        }
        catch (err) {
            res.json({ msg: err.message })

        }
    },
    update: async (req, res) => {
        try {
            let extbook = await Book.findById({ _id: id })
            if (!extbook)
                return res.json({ msg: 'Id not found' })

            let updated = await Book.findByIdAndUpdate({ _id: id }, req.body)

            res.status(200).json({ msg: "Book updated Successfully", updated })

        }
        catch (err) {
            res.json({ msg: err.message })

        }
    },
    delete: async (req, res) => {
        try {

            let extbook = await Book.findById({ _id: id })
            if (!extbook)
                return res.json({ msg: 'Id not found' })

            let deleted = await Book.findByIdAndDelete({ _id: id })

            res.status(200).json({ msg: "Book deleted Successfully", deleted })
        }
        catch (err) {
            res.json({ msg: err.message })

        }
    },

}

module.exports = bookctrl