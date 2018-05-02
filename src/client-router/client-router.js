import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import index from '../li-components/index/index.vue';
import details from '../li-components/details/details.vue';
import ordering from '../li-components/details/ordering/menus.vue';

const router = new VueRouter({
    routes:[
        {path:'/index',name:'index',component:index},
        {path:'/details',name:'details',component:details,
        children:[{path:'ordering',name:'ordering',component:ordering}]}
    ]
})
export default router; 