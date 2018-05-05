<template>
    <div>
        <div class="search-t">
            <h3 @click="search" class="back">b</h3>
            <input type="text" placeholder="输入商家、商品名称"/>
            <p>搜索</p>
        </div>
        <div class="search-b">
            <h3>热门搜索</h3>
            <ul>
                <li>炒饭</li>
                <li>芋圆</li>
                <li>奶茶</li>
                <li>面</li>
                <li>披萨</li>
                <li>烧仙草</li>
                <li>美宜佳</li>
                <li>鳗鱼</li>
                <li>奶盖</li>
                <li>鸡蛋仔</li>
            </ul>
        </div>

    </div>

</template>

<script>
    export default{
        methods:{
            search(){
                this.$router.push({name:'index'});
            }
        }
    }

</script>

<style lang="scss">
    @import '../../li-style/search.scss';
</style>