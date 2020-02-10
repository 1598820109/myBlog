const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String },

    herf: { type: String },

    logoUrl: { type: String },

    date: {
        type:String,

        default: new Date().toLocaleDateString(),
    }

})

module.exports = mongoose.model('Link', schema);