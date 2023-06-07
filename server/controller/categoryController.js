const category = require('../model/categoryModel')

const categoryCtrl = {
    getall: async (req, res) => {
        try {
            let data = await category.find({})
            res.json({ length: data.length, Categories: data })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    getSingle: async (req, res) => {
        try {
            let id = req.params.id

            const extuser = await category.findById({ _id: id })

            if (!extuser)
                return res.json({ msg: " User id not found" })

            res.status(200).json({ extuser, msg: `found the category ${extuser.title} with the id ${extuser.id}` })

        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    create: async (req, res) => {
        try {
            const { title, desc } = req.body

            let extuser = await category.findOne({ title })     /// title: req.body.title

            if (extuser)
                return res.json({ msg: `${extuser.title} already exist` })

            let createcat = await category.create({ title, desc })

            res.json({ msg: 'Created successfully', Category: createcat })

        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    update: async (req, res) => {
        try {
            let id = req.params.id

            let extuser = await category.findById({ _id: id })

            if (!extuser)
                return res.json({ msg: "category Does not exist" })

            let update = await category.findByIdAndUpdate({ _id: id }, req.body)

            res.json({ msg: " Category updated Successfuly", updated: update })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    delete: async (req, res) => {
        try {
            let id = req.params.id

            let extuser = await category.findById({ _id: id })

            if (!extuser)
                return res.json({ msg: "Category does not exist" })

            let deletedCategory = await category.findByIdAndDelete({ _id: id })

            res.json({ msg: " Category delete Successfuly", Deleted: deletedCategory })


        } catch (err) {
            return res.json({ msg: err.message })
        }
    },

}

module.exports = categoryCtrl
