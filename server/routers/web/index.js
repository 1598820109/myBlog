module.exports = app =>{

    const express = require('express');
    const router = express.Router();
    const mongoose = require('mongoose');

    // 引入文章模型
    const Category = mongoose.model('Category');
    const Article = mongoose.model('Article');
    const Links = mongoose.model('Link');
    const Project = mongoose.model('Project');

    router.get('/article/init',async (req,res)=>{
        const articleList = await Article.find().populate('sorts');
        res.send(articleList);
    })


    // 文章分类数据
    router.get('/article/list',async(req,res)=>{
        const parent = await Category.findOne({
            name:'分类',
        }).populate({
            path:'children',
            populate:{
                path:'articleList'
            }
        }).lean();

        res.send(parent);
    })

    // 文章详情数据
    router.get('/articles/:id',async (req,res)=>{
        const data = await Article.findById(req.params.id).populate('sorts');
        console.log(data);
        res.send(data)
    })

    // 归档数据
    router.get('/archive/list',async (req,res)=>{
        const archive = await Category.findOne({
            name:'归档',
        }).populate({
            path:'children',
            populate:{
                path:'articleList'
            }
        }).lean();

        res.send(archive);
    });

    //分类数据
    router.get('/categories/list',async (req,res)=>{
        const category = await Category.findOne({
             name:'分类',
        }).populate({
            path:'children',
            populate:{
                path:'articleList'
            }
        }).lean();

        res.send(category);
    })

    // 标签
    router.get('/labels/list',async (req,res)=>{
        const labels = await Category.findOne({
            name:'标签',
        }).populate({
            path:'children',
            populate:{
                path:'articleList'
            }
        }).lean();

        res.send(labels);
    })


    // 项目
    router.get('/project/list',async(req,res)=>{
        const project = await Project.find();
        res.send(project);
    })

    // 友情链接
    router.get('/links/list',async (req,res)=>{
         const links = await Links.find();
         res.send(links);
    })

    app.use('/web/api',router);

}