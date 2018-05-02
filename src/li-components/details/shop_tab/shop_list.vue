<template>
	<ul class="clearfix">
		<li v-for="(obj,idx) in dataset"
			:key="obj.path"
			:class="{'active':index === idx}"
			@click="change(idx)">
		  <router-link :to="obj.path">{{obj.text}}</router-link>
		</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return{
				dataset:[{
			          path: '/details/ordering',
			          text: '点餐'
			        },
			        {
			          path: '/details/comment',
			          text: '评论'
			        },
			        {
			          path: '/details/business',
			          text: '商家'
			        }
			      ],
				index:0
			}
		},
		methods:{
			change(idx){
				this.index = idx
			}
		}
	}
</script>

<style lang="scss" >

</style>