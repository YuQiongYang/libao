<template>
	<div class="_bounce">
		<img src="../../../images/pig.gif"/>
		<div>
			<h3>{{list.name}}</h3>
			<p><span>月售{{list.month_sales}}</span><span>好评率{{list.satisfy_rate}}%</span></p>
			<p><span>￥{{price}}</span>
			<!--<span @click="calculation">+</span>-->
			<!--<cal ref='cal_price'></cal>-->
			</p>
		</div>
	</div>
</template>

<script>
//	import cal from '../addReduce/addReduce.vue';
	export default{
		data(){
			return{
				list:[],
				price:[]
			}
		},
//		components:{
//			cal
//		},
		methods:{
			cal_pri(){
				this.$refs.cal_pri.calculation();
				this.$refs.cal_pri.reduce();
			}
		},
		mounted(){
			this.list = this.$parent.$children[2].$children[0].list;
			this.price = this.list.specfoods[0].price;
//			console.log(this.list.specfoods[0].price)
		}
	}
</script>

<style>
</style>