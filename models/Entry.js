var mongoose = require('mongoose')

var EntrySchema = mongoose.Schema({

    "Email": {
        type: String,
        require: true
    },

    "Password": {
        type: String,
        require: true,
        min: 2,
        max: 200,
    },

    "gender": {
        type: String,
        require: true,
    },

    "hobby": {
        type: String,
        require: true,
    },

    "city": {
        type: String,
        require: true,
    },

    "imgURL": {
        type: String,
        require: true
    },
})


module.exports = mongoose.model('android', EntrySchema)
