<template>
	<ul :class="searchBarFixed == true ? 'isFixed' :''">
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
			      searchBarFixed:'',
				index:0
			}
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll);
		},
		methods:{
			change(idx){
				this.index = idx
			},
			handleScroll () {
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			  let height = document.querySelector('.j-head').offsetHeight;
			  if(scrollTop >= height){
			  	  this.searchBarFixed = true
			  } else {
			    this.searchBarFixed = false
			  }
			},
			destroyed () {
			  window.removeEventListener('scroll', this.handleScroll)
			}
		}
	}
</script>

<style lang="scss" >

</style>