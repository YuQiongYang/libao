<template>
    <div class="liType">
        <p class="type-t">换一批</p>
        <ul class="type-1" style="display:block;">
            <li><img src="../../../images/type-1.png" /><p>美食特快</p></li>
            <li><img src="../../../images/type-2.png" /><p>午餐管饱</p></li>
            <li><img src="../../../images/type-3.png" /><p>新店特惠</p></li>
            <li><img src="../../../images/type-4.png" /><p>商超便利</p></li>
            <li><img src="../../../images/type-5.png" /><p>果蔬生鲜</p></li>
            <li><img src="../../../images/type-6.png" /><p>大牌简餐</p></li>
            <li><img src="../../../images/type-7.png" /><p>帮买帮送</p></li>
            <li><img src="../../../images/type-8.png" /><p>会员红包</p></li>
            <li><img src="../../../images/type-9.png" /><p>医药健康</p></li>
            <li><img src="../../../images/type-10.png" /><p>甜品饮品</p></li>
        </ul>
        <ul class="type-2" style="display:none;">
            <li><img src="../../../images/type-11.png"><p>午餐管饱</p></li>
            <li><img src="../../../images/type-12.png"><p>美食特快</p></li>
            <li><img src="../../../images/type-13.png"><p>新店特惠</p></li>
            <li><img src="../../../images/type-14.png"><p>商超便利</p></li>
            <li><img src="../../../images/type-15.png"><p>果蔬生鲜</p></li>
            <li><img src="../../../images/type-16.png"><p>大牌简餐</p></li>
            <li><img src="../../../images/type-17.png"><p>帮买帮送</p></li>
            <li><img src="../../../images/type-18.png"><p>会员红包</p></li>
            <li><img src="../../../images/type-19.png"><p>医药健康</p></li>
            <li><img src="../../../images/type-20.png"><p>甜品饮品</p></li>
        </ul>
    </div>
</template>


<script>
    export default{
        mounted(){
            $('.type-t').on('click',function(){
                $('.type-1').hide();
                $('.type-2').show();
            })
            $('.type-2').on('click',function(){
                $('.type-2').hide();
                $('.type-1').show();
            });
        }
    }

</script>