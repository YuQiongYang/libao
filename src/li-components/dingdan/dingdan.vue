<template>
    <div class="dingdan">
        <div class="dingdanContent">
            <div class="Diheader">
                <ul>
                    <li>
                        订单
                    </li>
                </ul>
            </div>
            <div class="min">
                <ul>
                    <li></li>
                    <li>
                        <img class="currentImg" id="currentImg" src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1525411173537&amp;di=172a3a2dfb476d1d29430be15962768c&amp;imgtype=0&amp;src=http%3A%2F%2Fd9.yihaodianimg.com%2FN06%2FM05%2F13%2F9E%2FCgQIzVerH4SAfKqdAAEAI9KMkjk76900_360x360.jpg" width="360" height="360" style="top: 590px; left: 92px; width: 360px; height: 360px; cursor: pointer;" log-rightclick="p=5.102" title="点击查看源网页">
                    </li>
                    <li></li>
                </ul>
            </div>
            <div class="minq">
                <ul>
                    <li></li>
                    <li>
                       登录购买才有信息
                    </li>
                    <li></li>
                </ul>
            </div>
            <div class="minq">
                <ul>
                    <li></li>
                    <li><input type="button" value="登录" style="background:#FFE4E1;" @click="login1"></li>
                    <li></li>
                </ul>
            </div>  
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
            login1(){
                this.$router.push({name:'login1'})
            }
        }
    }
</script>
<style lang="scss" >
     @import '../../li-style/dingdan.scss';
</style>