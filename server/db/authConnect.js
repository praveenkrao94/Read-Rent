const mongoose = require('mongoose')

const connectdb = async () => {
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Connected to mongo Successfully')
        })
        .catch(err => console.log(`error in connection`, err))

}


module.exports = connectdb