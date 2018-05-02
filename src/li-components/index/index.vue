<template>
    <div class="index">
        <div class="main">
            <menus></menus>
            <restaurant></restaurant>       
        </div>
        <fixNav></fixNav>
    </div>
</template>

<script>
    //不能以menu命名
    import menus from './menus/menus';
    //restaurant同时有js和vue文件的话要写全后缀名
    import restaurant from './restaurant/restaurant.vue';
    import fixNav from '../fixNav/fixNav';
    export default{
        components:{
            menus,
            restaurant,
            fixNav        
        }
    }
</script>

