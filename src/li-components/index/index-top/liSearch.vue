<template>
    <div class="liSearch">
        <input type="text" placeholder="搜索商家、商品名称" @click="search" class="search-t">
        <ul class="search-b">
            <li>烧饼</li>
            <li>馅饼</li>
            <li>豆浆</li>
            <li>鲜果立减20起</li>
            <li>花茶养生</li>
        </ul>
    </div>
</template>

<script>
    export default{
        methods:{
            search(){
                this.$router.push({name:'search'});
            }
        },
        mounted(){
            $(window).scroll(function(){

                if($(window).scrollTop() >= 500){
                    $('input').addClass("fixed");
                    $('.search-b').hide();
                    }else{
                        $('input').removeClass("fixed");
                    }

        
            })
        }
    
    }


</script>