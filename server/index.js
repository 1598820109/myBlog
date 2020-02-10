
const express = require('express');
const app = express();

app.use(express.json());
// 托管静态文件
app.use('/uploads', express.static( __dirname + `/uploads`))
// 解决跨域问题
app.use(require('cors')());


// 引入app
require('./routers/admin')(app);
require('./plugin/db')(app);
require('./routers/web')(app);

app.listen(8181,()=>{
     console.log("localhost:8181");
})


