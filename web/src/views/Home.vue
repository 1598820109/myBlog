<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 -->
      <myComponent></myComponent>
      <!-- 侧边栏 -->

      <!-- 内容 -->
      <el-container class="articleContent">
        <!-- 数据内容 -->
        <el-main style="background:white;">
          <el-card class="box-card" v-for="(article,index) in articlelist" :key="index" style="margin-bottom: 60px;width: 660px;">
            <div slot="header" class="clearfix bgImg" :style="{'background':`url(${article.imageUrl})`,'background-repeat':'no-repeat','background-size': 'cover'}">
              <router-link tag="span" :to="`/content/${article._id}`" class="title">{{article.name}}</router-link>
            </div>
            <div class="text item" style="position:relative;    text-align: left; padding: 0px 21px;margin-bottom: -40px;">
              <i class="el-icon-edit"></i> {{article.date}}

              <span class="p" v-for="item in articlelist[index].sorts" :key="item._id">
                   <i :class="`${icon[item.name]}`"></i>  {{item.name}}
              </span>


              <!-- <i class="el-icon-s-tools"></i> {{article.sorts[0].name}}
              <i class="el-icon-s-platform"></i> {{article.sorts[1].name}}
              <i class="el-icon-chat-dot-round"></i> {{article.sorts[2].name}} -->
              <i class="el-icon-chat-dot-round"></i> 评论
            </div>
          </el-card>
        </el-main>
        <!-- 数据内容 -->
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
        cardList: [],
        articlelist: [],
        icon: {
          '分类': 'el-icon-s-tools',
          '建站': 'el-icon-s-platform',
          '开发': 'el-icon-s-opportunity',
          '个人': 'el-icon-user-solid',
          '项目': 'el-icon-s-promotion',
          '标签': 'el-icon-s-flag'
        },
        categorieslist: {},
        currentDate: new Date(),
      }
    },

    components: {
      myComponent,
      myContent,
    },

    methods: {
      // 分类
      async fatch() {
        const res = await this.$http.get('/article/list');
        this.cardList = res.data;
      },

      //文章列表
      async article() {
        const res = await this.$http.get('/article/init');
        this.articlelist = res.data;
        const oArticle = this.articlelist;

      },

    },

    created() {
      this.fatch();
      this.article();
    },
  }
</script>

<style>
  /* 引入css文件 */
  @import "../assets/css/common.css";
</style>