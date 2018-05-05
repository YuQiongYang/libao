<template>
    <div class="fixNav">
        <ul>
            <li @click="search()">
                <i class="iconfont icon-gouwuche"></i>
                <span>首页</span>
            </li>
            <li @click="find()">
                <i class="iconfont icon-faxian"></i>
            <span>发现</span></li>
            <li @click="dingdan()">
                <i class="iconfont icon-dingdan"></i>
                <span>订单</span>
            </li>
            <li @click="login()">
                <i class="iconfont icon-wo"></i>
                <span>我的</span>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    export default{
        methods:{
            search(){
                this.$router.push({name:'index'})
            },
            find(){
                this.$router.push({name:'liMy'})
            },
            dingdan(){
                this.$router.push({name:'dingdan'})
            },
            login(){
                this.$router.push({name:'login'})
            },
            active(i,e){
                for(var i=0;i<=$('.fixNav li').length;i++){
                    $('.fixNav li').removeClass('fixActive')
                }
                var currentLi = $(e.target).parent('li');
                currentLi.addClass('fixActive')
            }
        }
    }
</script>

<style lang="scss" >
    @import '../../li-style/fixNav.scss';
</style>