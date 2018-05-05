<template>
	<div class="header">
		<div class="back">
		  <img :src="this.$store.state.params.dataset.image_path"  alt="" />
		  <span class="return"><router-link to="/index"><</router-link></span>
		</div>
		<h1>{{this.$store.state.params.dataset.name}}</h1>
		<div class="shop_header">
			<span>{{this.$store.state.params.dataset.rating}}</span>
			<span>月售{{this.$store.state.params.dataset.recent_order_num}}单</span>
			<span>商家配送约{{this.$store.state.params.dataset.order_lead_time}}分钟</span>
		</div>
		<p>{{this.$store.state.params.dataset.promotion_info}}</p>
	</div>
	
</template>

<script>
	import http from '../../../client-utils/httpclient'
	import common from '../../../client-utils/common'
	
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			
            let params = this.$store.state.params.params;
            let id = this.$store.state.params.id;
			http.getCt('restaurant',params).then((res) => {
				
//              console.log(res)
                for(let i=0;i<res.data.length;i++){
                	if(id === res.data[i].id){
//              		console.log(res.data[i])
                		this.$store.state.params.dataset = res.data[i];
//              		console.log(this.$store.state.params.dataset)
                	}
                }
           }) 
		}
	}
</script>
	
<style>
</style>