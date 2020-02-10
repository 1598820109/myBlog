<template>
    <div class="home">
        <el-container>
            <!-- 侧边栏 -->
            <myComponent></myComponent>
            <!-- 侧边栏 -->

            <!-- 内容 -->
            <el-container class="archive-crchive">
                <div class="archiveTile">
                    <h1>项目</h1>
                    <p class="text-muted">共4个项目</p>
                </div>

                <div class="panel-contnet">
                    <el-row :gutter="12">
                        <el-col :span="8">
                            <el-card shadow="hover" class="project-item" v-for="(item,index) in model" :key="index">
                                <el-link class="item-link" :underline="false" :href="`${item.href}`" target="_blank">
                                        <i class="el-icon-view"></i> {{item.name}}
                                        <span class="time"><i class="el-icon-time"></i>{{item.date}}</span>
                                </el-link>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </el-container>
            <!-- 内容 end-->
            <!-- 右边侧边栏 -->
            <myContent></myContent>
            <!-- 右边侧边栏 -->
        </el-container>
        <router-view></router-view>
    </div>
</template>

<script>
    import myComponent from '@/components/common/myComponent';
    import myContent from '@/components/common/myContent';
    export default {
        name: 'home',
        data() {
            return {
                model: {},
                currentDate: new Date(),
            }
        },

        components: {
            myComponent,
            myContent,
        },

        methods: {
            async featch(){
                const res = await this.$http.get('/project/list');
                this.model = res.data;
            }
        },

        created() {
            this.featch();
        },


    }
</script>

<style>
    /* 引入css文件 */
    @import "../assets/css/common.css";

    .project-item{
        position: relative;
        top: 20px;
        height:60px;
        text-align: left;
        line-height: 60px; 
        padding: 0px 20px;
        margin-bottom: 20px;
        z-index: 999;
    }

    .project-item .time{
        position: absolute;
        right: 20px;
    }

    .project-item .item-link{
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
    }
</style>