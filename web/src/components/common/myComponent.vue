<template>
  <div class="left">
    <el-aside>
      <div>
        <el-avatar :size="80" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3190802921,718801834&fm=26&gp=0.jpg"></el-avatar>
        <el-tag type="info" style="position:absolute;top:170px;left:100px;background-color: #000000; border-color: #000000;color: #ffffff;">Web
          Develope</el-tag>
      </div>
      <span class="name">阿柒</span>
      <div>
        <el-input size="medium" placeholder="搜索" class="input-with-select asideInput">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>

      <el-menu router :default-openeds="['1', '3']" style="margin-top:-320px;background-color:white; color:#555555;">
        <el-menu-item-group align="left">
          <el-menu-item index="/"> <i class="el-icon-s-home"></i>
            首页
          </el-menu-item>
          <el-menu-item index="/archive"> <i class="el-icon-s-order"></i>
            归档
          </el-menu-item>
          <el-menu-item index="/categories"> <i class="el-icon-s-finance"></i>
            分类
          </el-menu-item>
          <el-menu-item index="/label"> <i class="el-icon-s-flag"></i>
            标签
          </el-menu-item>
          <el-menu-item index="/project"> <i class="el-icon-s-opportunity"></i>
            项目
          </el-menu-item>
          <el-menu-item index="1-1"> <i class="el-icon-camera-solid"></i>
            照片
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>

      <!-- 链接 -->
      <el-footer>
        <el-tooltip v-for="(link,index) in model" :key="index" :content="link.name" placement="top">
          <el-link :underline="false" :href="link.herf" target="_blank">
            <img class="logo" :src="`${link.logoUrl}`" alt="">
          </el-link>
        </el-tooltip>
      </el-footer>
      <!-- 链接 -->


    </el-aside>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        model: {},
      }
    },

    methods: {
      async fatch() {
        const res = await this.$http.get('/links/list');
        console.log(res.data);
        this.model = res.data;
      }
    },

    created() {
      this.fatch();
    }
  }
</script>


<style>
  .el-footer {
    position: fixed;
    bottom: 0px;
    background-color: white !important;
  }

  .el-link {
    display: block;
    width: 18px;
    height: 18px;
    margin: 0px 4px;
    text-decoration: none;
  }

  .el-footer .el-button {
    padding: 0px;
    border: 0px;
    outline: 0px;
  }

  .el-footer .el-button .logo {
    width: 18px;
    height: 18px;
    display: block;
  }
</style>