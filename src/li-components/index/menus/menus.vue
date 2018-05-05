<template>
    <div class="menus"> 
        <div class="title">
            <span>——</span>
            <h3>推荐商家</h3>
            <span>——</span>      
        </div>
        <div class="order">
            <ul class="order_t">
                <li @click="changeShow(0,$event);changeShow2(0,$event);slide()">
                    <span v-text="sort" @click="num='0'" :class="{active:num=='0',sort:true}"></span>
                </li>
                </a>
                <li @click="changeShow(0,$event);changeShow2(0,$event);slide();changeText2(0,$event)">
                    <span @click="num='1';" :class="{active:num=='1'}" path="comment">
                        好评优先
                    </span>
                </li>
                <li @click="changeShow(0,$event);changeShow2(0,$event);slide();changeText2(0,$event)">
                    <span @click="num='2'" :class="{active:num=='2'}" path="shortest">距离最近</span>
                </li>
                <li @click="changeShow(0,$event);changeShow2(0,$event);slide()">
                    <span @click="num='3'" :class="{active:num=='3',shaixuan:true}">筛选</span>
                </li>
            </ul>
            <div class="order_b" v-if="show">
                <ul class="according">
                    <li v-for="(obj,idx) in according"  
                        @click="choose=idx;changeShow(0,$event);changeText(idx);slide()" 
                        :class="{choose:choose==idx}" 
                        :key="obj.path">
                        <span v-text="obj.text"></span>
                        <i v-if="choose==idx">√</i>
                    </li>
                </ul>
                <div class="indexCover" @click="changeShow(0,$event);slide()"></div>
            </div>
            <div class="order_b2" v-if="show2">
                <div class="filter">
                    <section class="server">
                        <h3>特色服务</h3>
                        <ul>
                            <li v-for="(item,idx) in server" 
                                @click="server2=idx"
                                :class="{choose2:server2==idx}">
                                <img :src="item.icon" alt="" />
                                <span>{{item.text}}</span>
                            </li>
                        </ul>
                    </section>
                    <section class="activity">
                        <h3>优惠活动</h3>
                        <ul>                            
                            <li v-for="(item,idx) in activity"
                                @click="activity2=idx"
                                :class="{choose2:activity2==idx}">
                                <i :class="item.path">{{item.icon}}</i>
                                <span>{{item.text}}</span>
                            </li>
                        </ul>
                    </section>
                    <section class="average">
                        <h3>人均消费</h3>
                        <ul>                            
                            <li v-for="(item,idx) in average"
                                @click="average2=idx"
                                :class="{choose2:average2==idx}">
                                <i :class="item.path">{{item.icon}}</i>
                                <span>{{item.text}}</span>
                            </li>
                        </ul>          
                    </section>
                    <section class="property">
                        <h3>商家属性</h3>
                        <ul>                            
                            <li v-for="(item,idx) in property"
                                @click="property2=idx"
                                :class="{choose2:property2==idx}">
                                <i :class="item.path">{{item.icon}}</i>
                                <span>{{item.text}}</span>
                            </li>
                        </ul>          
                    </section>
                </div>
                <div class="btn">
                    <span 
                        v-for="(item,idx) in btn" 
                        @click="btn2=idx;btnClick(0,$event);slide()"
                        :class="{btn_choose:btn2==idx,btn:true}">
                        {{item.text}}
                    </span>
                </div>
                <div class="indexCover" @click="changeShow2(0,$event);slide()"></div>
            </div>
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
                server:[
                    {path:'bird',text:'蜂鸟专送',icon:'src/images/bird.png'},
                    {path:'member',text:'会员领红包',icon:'src/images/queen.png'}
                ],
                activity: [
                    {path: 'new', text: '新用户优惠',icon:'新'},
                    {path: 'te', text: '特价商品',icon:'特'},
                    {path: 'jian', text: '下单立减',icon:'减'},
                    {path: 'zeng',text:'赠品优惠',icon:'赠'},
                    {path: 'fan', text:'下单返红包',icon:'返'},
                    {path: 'ling', text: '进店领红包',icon:'领'}
                ],
                average:[
                    {path: 'twenty', text: '20'},
                    {path: 'tf',text:'20-40'},
                    {path: 'forty', text:'40以上'}
                ],
                property: [
                    {path: 'pin', text: '品牌商家',icon:'品'},
                    {path: 'bao', text: '食安保',icon:'保'},
                    {path: 'xin', text: '新店',icon:'新'},
                    {path: 'piao',text:'开发票',icon:'票'},
                    {path: 'fu', text:'在线支付',icon:'付'},
                    {path: 'zhun', text: '准时达',icon:'准'}
                ],
                btn:[
                    {path:'clear',text:'清空'},
                    {path:'check',text:'查看商家'}
                ],
                //0表示默认第一个被选中
                sort:"综合排序",
                num:0,
                show:false,
                choose:0,
                show2:false,
                server2:null,
                activity2:null,
                average2:null,
                property2:null,
                btn2:1,
                Fixed:'',       
            }
        },
        methods:{
            //改变according的状态
            changeShow:function(i,e){
                if(e.target.className.includes('sort')){
                    this.show=!this.show
                }else{
                    this.show=false
                }       
            },
            //改变filter的状态
            changeShow2:function(i,e){
                if(e.target.className.includes('shaixuan')){
                    this.show2=!this.show2
                }else{
                    this.show2=false
                }  
            },
            //根据according排序
            changeText:function(idx){
                //改变文本内容
                this.sort=this.according[idx].text;
                //改变参数
                this.$store.state.params.params.type=this.according[idx].path;
                //触发changeDataset
                this.$store.dispatch('changeDataset');
            },
            //根据好评优先、距离最近排序
            changeText2:function(i,e){
                this.$store.state.params.params.type=e.target.getAttribute('path');
                this.$store.dispatch('changeDataset');
            },
            //遮罩层出现时，主页面停止滑动
            slide:function(){
                if(this.show||this.show2){
                    $('.mainContent').css('overflow','hidden');
                    $('.order').addClass('m_fixed');

                }else{
                    $('.mainContent').css('overflow','scroll');
                    $('.order').removeClass('m_fixed');
                }     
            },
            btnClick:function(i,e){
                if(e.target.innerText=="清空"){
                    this.server2=null;
                    this.activity2=null;
                    this.average2=null;
                    this.property2=null;
                }else{
                    this.changeShow2(i,e)
                }
            }
        }
    }
</script>

