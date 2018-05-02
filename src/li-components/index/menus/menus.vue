<template>
    <div class="menus"> 
        <div class="title">
            <span>——</span>
            <h3>推荐商家</h3>
            <span>——</span>      
        </div>
        <div class="order">
            <ul class="order_t">
                <li @click="changeShow()">
                    <span v-text="sort" @click="num='0'" :class="{active:num=='0'}"></span>
                    <i></i>
                </li>
                <li @click="changeParams()">
                    <span @click="num='1'" :class="{active:num=='1'}">好评优先</span>
                </li>
                <li>
                    <span @click="num='2'" :class="{active:num=='2'}">距离最近</span>
                </li>
                <li>
                    <span @click="num='3'" :class="{active:num=='3'}">筛选</span>
                    <i></i>
                </li>
            </ul>
            <transition name="fade">
                <ul class="according" v-if="show">
                    <li v-for="(obj,idx) in according"  
                        @click="choose=idx;changeShow();changeText(idx);changeParams()" 
                        :class="{choose:choose==idx}" 
                        :key="obj.path">
                        <span v-text="obj.text"></span>
                        <i v-if="choose==idx">√</i>
                    </li>
                </ul>
            </transition>
        </div>   
    </div>    
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                according: [
                    {path: 'synthesize', text: '综合排序'},
                    {path: 'highest_sales', text: '销量最高'},
                    {path: 'lowest_price', text: '起送价最低'},
                    {path: 'fastest_delivery', text: '配送最快'},
                    {path: 'lowest_delivery', text:'配送费最低'},
                    {path: 'from_low', text: '人均从低都高'},
                    {path: 'from_high', text: '人均从高到低'}
                ],
                num:0,
                choose:0,
                show:false,
                sort:"综合排序"
            }
        },
        methods:{
            changeShow:function(){
                this.show=!this.show
            },
            changeText:function(idx){
                //改变文本内容
                this.sort=this.according[idx].text;
                //改变参数
                this.$store.state.params.params.type=this.according[idx].path
            },
            changeParams:function(){
                this.$store.dispatch('changeParams'); 
            }
        }
    }
</script>