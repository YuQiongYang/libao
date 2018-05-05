<template>
    <div class="mainContent">
        <indexTop></indexTop>
        <menus></menus>
        <restaurant></restaurant>       
    </div>
</template>
<script type="text/javascript">
    import indexTop from '../index-top/top/top.vue';
    import menus from '../menus/menus';
    import restaurant from '../restaurant/restaurant.vue';
    export default{
        components:{
            indexTop,
            menus,
            restaurant       
        }
        // mounted(){
        //     let scroll = this.Scroll;
        //     setTimeout(function(){
        //         window.addEventListener('scroll', scroll());
        //     },1000)
            
        //     console.log('999')
        // },
        // methods:{
        //     Scroll(){
        //         var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //         let height = document.querySelector('.main').offsetHeight;
        //         console.log(scrollTop)
        //         if(scrollTop >= height){
        //               this.searchBarFixed = true
        //         } else {
        //             this.searchBarFixed = false
        //         }
        //     },
        //     destroyed(){
        //         window.removeEventListener('scroll', this.Scroll)
        //     }
        // }
    }
</script>