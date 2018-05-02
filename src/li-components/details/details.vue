<template>
	<div>
		<div class="j-head"></div>
		<div class="j-list">
			<sl></sl>
		</div>
		<div class="j-foods">
			<router-view></router-view>
		</div>
		<div class="j-total"></div>
	</div>
</template>

<script>
	import sl from './shop_tab/shop_list.vue'
	export default{
		components:{
			sl
		}
	}
</script>

<style lang="scss">
    @import '../../li-style/details.scss';
</style>