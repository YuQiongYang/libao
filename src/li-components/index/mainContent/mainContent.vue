<template>
    <div class="mainContent">
        <indexTop></indexTop>
        <menus :orderFixed="orderFixed"></menus>
        <restaurant></restaurant>       
    </div>
</template>
<script type="text/javascript">
    import indexTop from '../index-top/top/top.vue';
    import menus from '../menus/menus';
    import restaurant from '../restaurant/restaurant.vue';
    let scrollTop;
    let height;
    export default{
        components:{
            indexTop,
            menus,
            restaurant       
        },
        data(){
            return{
                orderFixed:false
            }
        },
        mounted(){
            $('.mainContent')[0].addEventListener('scroll', this.Scroll);
        },
        methods:{
            Scroll(){
                scrollTop = $('.mainContent')[0].scrollTop;
                height = $('.main')[0].offsetHeight;
                if(scrollTop >= height){
                    this.orderFixed = true
                } else {
                    this.orderFixed = false
                }
            },
            destroyed(){
                $('.mainContent')[0].removeEventListener('scroll', this.Scroll)
            }
        }
    }
</script>