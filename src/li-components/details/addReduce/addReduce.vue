<template>
	<div class="cal" >
		<span class="reduce" 
			  v-if="show" 
			  @click="reduce"
			  >-</span>
		<span class="num" v-if="showNum" >{{num}}</span>
		<span class="add" @click="calculation">+</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				showNum:false,
				num :0
			}
		},
//		mounted(){
//			if(this.num > 0){
//				this.showNum = true
//			}
//		},
		methods: {
			calculation() {
				this.show = true;
				this.num += 1;
				this.showNum = true
			},
			reduce(){
				if(!this.num<=0){
					this.num -= 1
				}else{
					this.showNum = false;
					this.show = false;
				}
			}
		}
	}
</script>

<style>

</style>