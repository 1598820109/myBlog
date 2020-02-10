<template>
    <div class="category">
        <el-container>
            <myComponent></myComponent>
            <el-container class="archive-crchive">
                <div class="archiveTile">
                    <h1>分类</h1>
                    <p class="text-muted">共{{categories.length}}个分类</p>
                    <div class="list">
                        <ul>
                            <li><a href="#">All</a></li>

                            <router-link to="/" tag="li" v-for="(item,index) in categories" :key="index">
                                <a href="#"> {{item.name}}</a>
                            </router-link>
                        </ul>
                    </div>
                </div>

                <div class="panel-contnet">
                    <div class="archivelist">
                        <div class="panle">
                            <div class="item" v-for="(item,index) in categories" :key="index">
                                <h3 class="panel-title">
                                    <i class="el-icon-folder-opened"></i> {{item.name}} <small class="text-muted">
                                        (Total {{item.articleList.length}} articles)</small>
                                </h3>
                                <ul class="colist">

                                    <router-link :to="`/content/${list._id}`" tag="li" v-for="(list,index) in item.articleList">
                                        <span>{{list.date}}</span>
                                        <a href="#"> {{list.name}}</a>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
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
                message: "归档",
                categories: [],
            }
        },

        components: {
            myComponent,
            myContent
        },

        methods: {
            async fatch() {
                const res = await this.$http.get('/categories/list');
                console.log(res.data.children);
                this.categories = res.data.children;
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
        left: 20%;
        padding: 10px 30px;
    }

    .panel-contnet {
        width: 100%;
        height: auto;
        position: absolute;
        top: 90px;
        left: 0px;
        padding: 0px 20px;
    }

    .panel-herder {
        padding: 0px 10px 20px 10px;
    }

    .archivelist {
        line-height: 40px;
        color: #777;
    }

    .archiveTile .list ul {
        list-style: none;
        position: relative;
        top: 0px;
        right: 40px;
    }

    .archiveTile .list li {
        float: left;
        margin-right: 20px;
    }

    .archivelist .panle {
        width: 100%;
        height: 100%;
        position: relative;
        top: 60px;
        left: 10px;
    }

    .archivelist .panle .item {
        width: 100%;
        height: auto;
        position: relative;
        top: 0px;
        left: 0px;
    }

    .archivelist .panle .text-muted {
        letter-spacing: 0px;
    }

    .archivelist .panle .panel-title {
        margin-top: 20px;
        color: black;
    }

    .archivelist .panle .colist {
        position: relative;
        right: 40px;
        top: 10px;
    }
</style>