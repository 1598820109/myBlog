<template>
  <div class="home">
    <el-container>

      <!-- 侧边栏 -->
      <myComponent></myComponent>
      <!-- 侧边栏 -->
      <!-- 内容 -->
      <el-container class="articleContent">
        <!-- 数据内容 -->
        <el-main style="background:white;" >
          <el-card class="box-card" style="margin-bottom: 60px;width: 860px;height: auto;">
            <div slot="header" class="clearfix bgImg">
              <div class="article-header">
                <h1 class="article-title">{{model.name}}</h1>
              </div>
              <div class="text item" style="position:relative;top:-40px; padding: 0px 21px;text-align:center;">
                <i class="el-icon-edit"></i> {{model.date}}
                <span class="p" v-for="(sort,index) in sorts" :key="index">
                  <i :class="`${icon[sort.name]}`"></i>{{sort.name}}
                </span>
              </div>
            </div>
            <!-- 文章内容 -->
            <div v-html="model.content" align="left" class="content"></div>
            <!-- 文章内容 end-->
            <div class="text item" style="position:relative;    text-align: left; padding: 0px 21px;margin-bottom: -40px;">
            </div>
          </el-card>
        </el-main>
        <!-- 数据内容 -->
      </el-container>
      <!-- 内容 end-->


      <!-- 右边侧边栏 -->
      <myContent></myContent>
      <!-- 右边侧边栏  end-->

    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
  import myComponent from '@/components/common/myComponent';
  import myContent from '@/components/common/myContent';
  import myArtilce from '@/components/common/myArticle';
  export default {
    props: {
      id: { required: true }
    },
    name: 'home',
    data() {
      return {
        model: {},
        sorts: [],
        icon: {
          '分类': 'el-icon-s-tools',
          '建站': 'el-icon-s-platform',
          '开发': 'el-icon-s-opportunity',
          '个人': 'el-icon-user-solid',
          '项目': 'el-icon-s-promotion',
          '标签': 'el-icon-s-flag'
        },
        currentDate: new Date(),
      }
    },

    components: {
      myContent,
      myComponent,
      myArtilce
    },

    // 组件
    methods: {
      async fetch() {
        const res = await this.$http.get(`articles/${this.id}`);
        this.model = res.data;
        console.log(res.data)
        this.sorts = res.data.sorts;
      },
    },

    created() {
      this.fetch();
    },
  }
</script>

<style>
  @import '/assets/css/common.css';


</style>