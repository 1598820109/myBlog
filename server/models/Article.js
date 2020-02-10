const mongoose = require('mongoose');

const schema = new mongoose.Schema({

        name:{type:String},

        imageUrl:{type:String},

        content:{type:String},

        markcontent:{type:String},

        date:{
            type:String,
            default:new Date().toLocaleDateString(),
        },

        sorts:[{type:mongoose.SchemaTypes.ObjectId, ref:'Category'}]

})

module.exports = mongoose.model('Article',schema);