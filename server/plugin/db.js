
// 暴露
module.exports = app =>{
    // 引入mongoose模块
    const mongoose = require('mongoose');

    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/my_blog',{
        useNewUrlParser:true
    })

    require('require-all')(__dirname + '/../models');
}


