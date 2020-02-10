<template>
    <div class="archive">
        <el-container>
            <myComponent></myComponent>
            <el-container class="archive-crchive">
                <div class="archiveTile">
                    <h1>{{archiveName}}</h1>
                    <p class="text-muted">共{{archiveNumber}}篇文章</p>
                </div>

                <div class="panel-contnet">
                    <div class="panel-herder">
                        <h3 class="panel-title">
                            <i class="el-icon-document-checked"></i>
                             {{Time}}
                        </h3>
                    </div>

                    <div class="archivelist">
                        <ul>
                            <router-link :to="`/content/${item._id}`" tag="li" v-for="(item,index) in archiveList" :key="index">
                                 <span>{{item.date }}</span>
                                 <a href="#">{{item.name}}</a>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </el-container>
            <myContent></myContent>
        </el-container>

    </div>
</template>

<script>
    import myComponent from '@/components/common/myComponent';
    import myContent from '@/components/common/myContent';
    export default {
        name: 'archive',
        data() {
            return {
                archiveName:'',
                Time:'',
                archiveNumber:'',
                archiveList:[]
            }
        },

        components: {
            myComponent,
            myContent
        },

        methods: {
            async fatch(){
                 const res = await this.$http.get('/archive/list');
                 const data = res.data.children[0].articleList; 
                 const dateLength = res.data.children[0].articleList.length;
                 this.archiveName = res.data.name;
                 this.archiveNumber = dateLength;
                 this.Time = res.data.date;
                 this.archiveList = data;
             }
        },

        created() {
            this.fatch();
        },

    }
</script>

<style>
    .archive-crchive {
        position: relative;
        margin-bottom: 60px;
        width: 860px;
        height: auto;
        padding: 10px 30px;
    }

    .panel-contnet {
        width: 100%;
        height: auto;
        position: absolute;
        top: 120px;
        left: 0px;
        padding: 0px 20px;
    }

    .panel-herder{
        padding: 0px 10px 20px 10px;
        position:relative;
        top:15px;
    }

    .archivelist{
        line-height: 40px;
        color:#777;
    }

    .archivelist ul{
        list-style: none;
        position: relative;
        right: 30px;
    }

    .archivelist li span{
        margin-right: 20px;
        transition: all 0.4s;
        font-size: 14px;
    }

    .archivelist li a{
      color: #777;
      font-size: 14px;
      transition: all 0.4s;
    }

    .archivelist li:hover span{
        transition: all 0.4s;
        color: black
    }

    .archivelist li:hover a{
        transition: all 0.4s;
        color: black;
        text-decoration: none;
        
    }
    
</style>