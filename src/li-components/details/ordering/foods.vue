<template>
	<div class="all_kinds">
		
		<ul>
			<li v-for="(obj,idx) in dataset" :key="obj">{{obj}}</li>
		</ul>
	</div>
</template>

<script>
	import http from '../../../client-utils/httpclient'
	import common from '../../../client-utils/common'
	
	export default{
		data(){
			return{
				dataset:[],
				common
			}
		},
		props:['config'],
		
		mounted(){
//			console.log(this.config.api)
			http.get(this.config.api).then((res)=>{
				for(let i =0;i<res.data.length;i++){
					if(res.data[i].name){
						this.dataset.push(res.data[i].name)
					}
				}
			})
		}
	}
</script>
	
<style>
</style>