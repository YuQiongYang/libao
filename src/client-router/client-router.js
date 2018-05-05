import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import index from '../li-components/index/index.vue';
import search from '../li-components/search/search.vue';
import fixNav from '../li-components/fixNav/fixNav.vue';
import details from '../li-components/details/details.vue';
import ordering from '../li-components/details/ordering/menus.vue';
import liMy from '../li-components/discover/discover.vue';
import dingdan from '../li-components/dingdan/dingdan.vue';
import login from '../li-components/login/login.vue';
import login1 from '../li-components/login1/login1.vue';
import comment from '../li-components/details/comment/comment.vue';
import business from '../li-components/details/business/business.vue';




const router = new VueRouter({
    routes:[
        {path:'/index',name:'index',component:index},
        {path:'/search',name:'search',component:search},
        {path:'/fixNav',name:'fixNav',component:fixNav},
        {path:'/liMy',name:'liMy',component:liMy},
        {path:'/login',name:'login',component:login},
        {path:'/login1',name:'login1',component:login1},
        {path:'/dingdan',name:'dingdan',component:dingdan},
        {path:'/details',name:'details',component:details,
        children:[{path:'ordering',name:'ordering',component:ordering},
                    {path:'comment',name:'comment',component:comment},
                    {path:'business',name:'business',component:business},]}
    ]
})
export default router; 