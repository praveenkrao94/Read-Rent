const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    desc: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,

    },
    author: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,

    },
    pages: {
        type: Number,
        required: true,

    },
    renCost: {
        type: Number,
        required: true,

    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    numberofCopy: {
        type: Number,
        required: true,

    },
    rentedCopies: {
        type: Number,
        default: 0
    },
    isbn: {
        type: String,
        default: ""
    },
    image: {
        type: Object,
        default: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
        }
    },
    isActive: {
        type: String,
        default: true

    }
}, {
    collection: 'books',
    timestamps: true

})


module.exports = mongoose.model("Books", BookSchema)