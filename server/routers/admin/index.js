module.exports = app =>{

    const express = require('express');
    const router = express.Router({
        mergeParams:true
    });

    // 插入数据
    router.post('/',async (req,res)=>{
         const model = await req.Model.create(req.body);
         res.send(model);
    })

    // 分类列表
    router.get('/',async (req,res)=>{
        const queryOptions = {};
        if(req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions);
        res.send(items);
    })


    // 分类删除
    router.delete('/:id',async (req,res)=>{
        await req.Model.findByIdAndDelete(req.params.id,req.body);
        res.send({
           success:true
        });
    });

    // 编辑数据
    router.get('/:id',async (req,res)=>{
       const model =  await req.Model.findById(req.params.id);
       res.send(model);
    })


    // 更新数据
    router.put('/:id',async(req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body);
        res.send(model);
    })

    app.use('/admin/api/rest/:resource',async (req,res,next) =>{
        const modelName = require('inflection').classify(req.params.resource);
        req.Model = require(`../../models/${modelName}`);
        next();
  },router); 


  //文件上传
  const multer = require('multer');
  const upload = multer({ dest: __dirname +'/../../uploads'});
  app.post('/admin/api/upload',upload.single('file'),async (req,res) =>{    
      const file = req.file;
      /* 给file加上ulr */
      file.url = `http://localhost:8181/uploads/${file.filename}`;
      res.send(file);
  })





}

