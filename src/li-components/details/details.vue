<template>
	<div>
		<div class="j-head">
			<hd></hd>
		</div>
		<div class="j-list ">
			<sl></sl>
		</div>
		<div class="j-foods">
			<router-view></router-view>
		</div>
		<div class="bounce">
			<bounce v-if="showModal"></bounce>
		</div>
		<div class="cover" @click="hide" v-if="coverModal"></div>
	</div>
</template>

<script>
	import sl from './shop_tab/shop_list.vue'
	import hd from './header/header.vue'
	import bounce from './bounce/bounce.vue'
	export default{
		data(){
			return{
				showModal:false,
				coverModal:false
			}
		},
		components:{
			hd,
			sl,
			bounce	
		},
		methods:{
			hide(){
				if(this.showModal===true){
					this.showModal = false;
					this.coverModal = false;
				}
			}
		}
	}
</script>

<style lang="scss">
    @import '../../li-style/details.scss';
</style>	