<template>
    <div class="index">
        <liHeader></liHeader>
            <mainContent></mainContent>
        <fixNav></fixNav>
    </div>
</template>

<script>
    import liHeader from './index-top/liHeader.vue'; 
    import mainContent from './mainContent/mainContent'
    import fixNav from '../fixNav/fixNav';
    export default{
        components:{
            liHeader,
            mainContent,
            fixNav        
        }
    }
</script>

