<template>
    <div class="main">
        <div class="liSearch">
            <liSearch></liSearch>
        </div>
        <div class="liBanner">
            <liBanner></liBanner>
        </div>
        <div class="liType">
            <liType></liType>
        </div>
        <div class="liPhoto">
            <liPhoto></liPhoto>
        </div>
    </div>
</template>


<script>
    import liSearch from '../liSearch';
    import liBanner from '../liBanner';
    import liType from '../liType';
    import liPhoto from '../liPhoto';
    export default{
        components:{
            liSearch,
            liBanner,
            liType,
            liPhoto
        }
    }

</script>

<style>
    @import'../../../../li-style/index.scss';
</style>
