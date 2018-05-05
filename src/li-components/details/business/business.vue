<template>
	<div class="container">
		<div class="activity">
			<h1>活动与服务</h1>
			<ul>
				<li v-for="(obj,idx) in dataset">
					<span :style="{background:'#'+obj.icon_color}">{{obj.icon_name}}</span>
					<span>{{obj.description}}</span>
				</li>
			</ul>
		</div>

		<div class="infor">
			<h1>商家信息</h1>
			<p>{{this.$store.state.params.dataset.description}}</p>
			<div><span>品类</span>
				<span><span v-for="(items,idx) in this.$store.state.params.dataset.flavors">
						{{items.name}}
					</span></span>
			</div>
			<div><span>商家电话</span><span>{{this.$store.state.params.dataset.phone}}</span></div>
			<div><span>地址</span><span>{{this.$store.state.params.dataset.address}}</span></div>
			<div><span>营业时间</span><span>{{this.$store.state.params.dataset.opening_hours[0]}}</span></div>
		</div>
	</div>
</template>

<script>
	import http from '../../../client-utils/httpclient'
	import common from '../../../client-utils/common'
	export default {
		data() {
			return {
				dataset: []
				//				config: {
				//					api: 'comment'
				//				}
			}
		},
		mounted() {
			let id = this.$store.state.params.id;
			this.dataset = this.$store.state.params.dataset.activities;
			console.log(this.$store.state.params.dataset)
		}
	}
</script>

<style>

</style>