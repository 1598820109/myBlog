<template>
    <div class="error">
        <div class="section">
            <div class="listen">
                <h2 class="title">404</h2>
                <p class="sorry">抱歉！ 找不到您的页面</p>
                <router-link to="/" tag="a" class="link">返回首页</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                
            }
        },        
    }

</script>

<style>
    .error{
        width: 100%;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: 110% 140% ;
        background-image:url(../../public/image/404.jpg);

    }

    .section{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .section .listen{
        position: relative;
        width: 300px;
        height: 400px;
    }

    .section .title{
        position: absolute;
        top: 0px;
        letter-spacing: 13px;
        color: white;
        font-size: 14rem;
    }

    .section .sorry{
        position: absolute;
        top: 181px;
        left: 80px;
        color: white;
        font-size: 18px;
    }

    .section .listen .link{
        display: inline-block;
        padding: 8px 40px;
        text-align: center;
        color: #f4f4f4;
        position: absolute;
        top: 220px;
        left: 84px;
        border: 1px solid white;
        text-decoration: none;
        transition: all 0.4s;
    }

    .section .listen .link:hover{
        transition: all 0.4s;
        color:white;
    }

</style>

