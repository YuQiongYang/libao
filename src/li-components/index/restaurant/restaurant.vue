<template>
    <div>
        <ul class="restaurant">
            <li 
                v-for="(item,idx) in this.$store.state.params.dataset" 
                :ct_id="item.id"
                @click="$router.push('/details/ordering');changeId(item.id)"
            >
                <img :src="item.image_path" height="130" width="130" alt="" />
                <div class="content">
                    <h3>
                        <span class="brand">品牌</span>
                        <span>{{item.name}}</span>
                    </h3>
                    <section>
                        <p class="rule">
                            <a>
                                <img src="../../../images/9.png" alt="" />
                                <span>{{item.rating}}</span>
                                <span>月售{{item.recent_order_num}}单</span>
                            </a>
                            <a>
                                <span class="on_time" v-if="item.delivery_mode">准时达</span>
                                <span class="special" v-if="item.delivery_mode">蜂鸟专送</span>
                            </a>
                        </p>
                        <p class="rule">
                            <a>
                                <span class="at_least">￥{{(item.piecewise_agent_fee.extra_fee).toFixed(2)}}元起送</span> 
                                <span>{{item.piecewise_agent_fee.description}}</span>
                            </a>
                            <a>
                                <span>{{item.distance}}m</span>
                                <span>{{item.order_lead_time}}分钟</span> 
                            </a>
                        </p>
                    </section>
                    <section>
                        <p>
                            <i class="shou">首</i><span>{{item.activities[0].description}}</span>
                        </p>
                        <p>
                            <i class="te">特</i><span>{{item.activities[1].description}}</span>
                        </p>
                    </section>
                </div>                
            </li>
        </ul>
    </div>
</template>

<script>
import http from '../../../client-utils/httpclient.js'
    export default {
        mounted(){       
            let params = this.$store.state.params.params;
            //初始化数据
            http.getCt('restaurant',params).then((res) => {
                this.$store.state.params.dataset = res.data;
            })
        },
        methods:{
            changeId:function(id){
                this.$store.state.params.id = id;
            }
        }
    }
</script>
