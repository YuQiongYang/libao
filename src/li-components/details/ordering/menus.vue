<template>
	<div class="container">
	<foods :config="config"></foods>
	</div>
</template>

<script>
	import foods from './foods.vue'
	
	export default{
		data(){
			return{
				config:{
					api:'ordering'
				}
			}
		},
		components:{
			foods
		}
	}
</script>

<style>
</style>