<template>
	<div class="all_kinds clearfix">
		<div class="menus">
			<ul>
				<li>
					<a v-for="(obj,i) in dataset[0].data" :href="'#'+i" :key="i" :class="{'active':index === i}" @click="change(i)">
						{{obj['menus']}}
					</a>
				</li>
			</ul>
		</div>
		<div class="foods">
			<div>
				<div v-for="(obj,i) in dataset[0].data" :key="i" :id="i" class="allList">
					<p>{{obj['menus']}}</p>
					<ul>
						<li class="clearfix" v-for="(obj,idx) in dataset[0].data[i].foods">

							<img src="../../../images/cake.png" />
							<div class="coll">
								<div @click="show(i,idx)">
									<h3>{{obj['name']}}</h3>
									<p>{{obj['description']}}</p>
									<span>月售{{obj['month_sales']}}份</span>
									<span>好评率{{obj['satisfy_rate']}}%</span>
								</div>
								<div class="addReduce">
									<span>￥{{price[idx]}}</span>
									<div class="cal">
										<span class="reduce" v-if="showRe" @click="reduce(idx,i)">-</span>
										<span class="num" v-if="showNum">0</span>
										<span class="add" @click="calculation(idx,i)">+</span>
									</div>

								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="total">
				<div>
					<span class="res">￥0</span>
					<span>配送费￥{{this.$store.state.params.dataset.float_delivery_fee}}</span>
				</div>
				<span class="send" @click="settle">￥{{send}}起送</span>
			</div>
		</div>
	</div>
</template>

<script>
	import http from '../../../client-utils/httpclient';
	import common from '../../../client-utils/common';
	import $ from 'jquery';
	export default {
		data() {
			return {
				dataset: [],
				price: [],
				send: [],
				list: [],
				total: 0,
				index: 0,
				common,
				showRe: true,
				showNum: true,
				allList: [],
				newList: [],
				num: 0,
			}
		},
		props: ['config'],

		mounted() {
			let id = this.$store.state.params.id;
			http.get(this.config.api + '?id=' + id).then((res) => {
				this.dataset.push(res)

				for(let i = 0; i < this.dataset[0].data.length; i++) {
					for(let j = 0; j < this.dataset[0].data[i].foods.length; j++) {
						this.price.push(this.dataset[0].data[i].foods[j].specfoods[0].price)
					}
				}
				this.send = this.$store.state.params.dataset.float_minimum_order_amount;
			})
		},
		methods: {
			change(idx) {
				this.index = idx
			},
			calculation(idx, i) {
				let goods
				this.total += this.price[idx];
				document.querySelector('.res').innerText = '￥' + (this.total).toFixed(2);
				this.num += 1;
				let foods = $('.foods').find('.allList')[i];
				let num = $($(foods).find('li')[idx]).find('.num');
				let guid = this.dataset[0].data[i].foods[idx].item_id;
				let listNum = Number(num.text())
				//				console.log(guid)
				//				let has = this.allList.some(function(g, i) {
				//					//					console.log(i)
				//					listNum = i;
				////					console.log(g)
				//					return g.guid == guid
				//				})
				//
				//				if(has) {
				//					this.allList[listNum].qty++;
				//				} else {
				//					goods = {
				//						guid: guid,
				//						name: this.dataset[0].data[i].foods[idx].name,
				//						price: this.dataset[0].data[i].foods[idx].specfoods[0].price,
				//						qty: 1
				//					}
				//				}
				//				this.allList.push(goods)
				//				//				console.log(this.allList[listNum].qty)
				//				num.text(this.allList[listNum].qty)
				console.log(listNum++)
				num.text(listNum++)

				if(this.total >= this.send) {
					document.querySelector('.send').innerText = '去结算';
					document.querySelector('.send').style.background = 'hotpink';
					document.querySelector('.send').style.color = '#fff';
				}
			},
			reduce(idx, i) {
				//				let listNum;
				let goods;
				let foods = $('.foods').find('.allList')[i];
				let num = $($(foods).find('li')[idx]).find('.num');
				//				this.allList[]
				let guid = this.dataset[0].data[i].foods[idx].item_id;
				let listNum = Number(num.text())

				//				console.log(guid)
				//				let has = this.allList.some(function(g, i) {
				//					listNum = i;
				//					return g.guid == guid
				//				})
				//
				//				if(has) {
				//					if(this.allList[listNum].qty > 0) {
				//						this.allList[listNum].qty--;
				//
				//					}
				//				} else {
				//					goods = {
				//						guid: guid,
				//						name: this.dataset[0].data[i].foods[idx].name,
				//						price: this.dataset[0].data[i].foods[idx].specfoods[0].price,
				//						qty: 1
				//					}
				//				}
				//				console.log(this.allList)
				if(num.text() > 0) {
					num.text(Number(num.text()) - 1)
					this.num -= 1;
					this.total -= this.price[idx];
					document.querySelector('.res').innerText = '￥' + (this.total).toFixed(2);
					console.log(listNum--)
					num.text(listNum--)

				} else {

				}
				if(this.total < this.send) {
					document.querySelector('.send').style.background = '#ffe4e4';
					document.querySelector('.send').style.color = '#333';
					document.querySelector('.send').innerText = '￥' + this.send + '起送';
				}
			},

			show(i, idx) {
				this.$parent.$parent.showModal = true;
				this.$parent.$parent.coverModal = true;
				this.list = this.dataset[0].data[i].foods[idx];
			},
			settle() {
				//				console.log(this.allList)
				for(let i = 0; i < this.allList.length; i++) {
					if(this.allList[i]) {
						this.newList.push(this.allList[i])
						console.log(this.newList)
					}
				}
				http.get('allList', {
					list: this.newList
				}).then((res) => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>

</style>