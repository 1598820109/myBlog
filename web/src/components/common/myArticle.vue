<template>
    <div class="article">
        <el-container>
            <!-- 数据内容 -->
            <el-main style="background:white;">
                <el-card class="box-card" v-for="(article,index) in articlelist" :key="index" style="margin-bottom: 60px;width: 660px;">
                    <div slot="header" class="clearfix bgImg" :style="{'background':`url(${article.imageUrl})`,'background-repeat':'no-repeat','background-size': 'cover'}">
                        <router-link tag="span" :to="`/content/${article._id}`" class="title">{{article.name}}</router-link>
                    </div>
                    <div class="text item" style="position:relative;    text-align: left; padding: 0px 21px;margin-bottom: -40px;">
                        <i class="el-icon-edit"></i> {{article.date}}
                        <i class="el-icon-s-tools"></i> {{article.sorts[0].name}}
                        <i class="el-icon-s-platform"></i> {{article.sorts[1].name}}
                        <i class="el-icon-chat-dot-round"></i> {{article.sorts[2].name}}
                        <i class="el-icon-chat-dot-round"></i> 评论
                    </div>
                </el-card>
            </el-main>
            <!-- 数据内容 -->
        </el-container>

    </div>
</template>