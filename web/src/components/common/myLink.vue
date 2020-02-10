<template>
    <div>
     <el-footer>
        <!-- 链接 -->
        <el-tooltip v-for="(link,index) in model" :key="index"  :content="link.name" placement="top">
            <el-link :underline="false" :href="link.herf" target="_blank">
              <img class="logo" :src="`${link.logoUrl}`" alt="">
            </el-link>
        </el-tooltip>
        <!-- 链接 -->
      </el-footer>
    </div>
</template>
