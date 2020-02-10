const mongoose = require('mongoose');

const shechma = mongoose.Schema({
    name: {type:String},

    href: {type:String},

    date:{
        type:String,

        default: new Date().toLocaleDateString()
    }
})

module.exports = mongoose.model('Project',shechma);