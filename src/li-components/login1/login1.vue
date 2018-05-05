<template>
    <div class="login1">
        <h4 class="title">立饱</h4>
        <div class="login1_t">
            <div class="inpu">
                 <input type="text" placeholder="手机号" tabindex="1"  name="loginname" />
             </div>
            <div class="inpu" >
                 <input type="password" placeholder="密码" tabindex="2"  name="password" />
            </div>
                 <p>温馨提示：未注册饿了么账号的手机号码，登录时将自动注册，且代表您已同意《<a href="#">用户服务协商</a>》</p>
            <div class="inpu bian" @click="search">
                 <input type="button" value="登录" style="background:#FFE4E1;">
            </div>
            <p style="text-align:center;">关于我们</p>
        </div>
        <fixNav></fixNav>
    </div>
</template>
<script type="text/javascript">
    import fixNav from '../fixNav/fixNav';
    export default{
        components:{
            fixNav        
        },
        methods:{
            search(){
                this.$router.push({name:'index'})
            }
        }
    }
</script>
<style lang="scss" >
    @import '../../li-style/login1.scss';
</style>
