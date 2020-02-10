
const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    name: { type: String },

    date: {
        type: String,
        //时间
        default: new Date().toLocaleDateString()
    },

    //特殊object对象ID
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
});

   schema.virtual('children',{
       localField: '_id',
       foreignField:'parent',
       justOne:false,
       ref:'Category'
   })

   schema.virtual('articleList',{
    localField: '_id',
    foreignField:'sorts',
    justOne:false,
    ref:'Article'
   })



// 暴露
module.exports = mongoose.model('Category', schema);
